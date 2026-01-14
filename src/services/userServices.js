import { createUser, findUserByEmail } from "@/repositories/userRepository";
import { userRegisterSchema } from "@/schemas/userSchema";
import bcrypt from "bcryptjs";
import { z } from "zod";
// Validate user data
export const validateUserData = async (payload) => {
  const parsed = userRegisterSchema.safeParse(payload);
  //if parsed failed
  if (!parsed.success) {
    const errors = z.treeifyError(parsed.error);
    //console.log("errors--------->", errors);
    return {
      success: false,
      message: "Validation failed",
      errors,
    };
  }
  //if parsed success
  return { success: true, data: parsed.data };
};

// Register new user
export const registerUser = async (payload) => {
  //validate
  const validation = await validateUserData(payload);
  if (!validation.success) {
    return validation;
  }
  // Check if user exists
  const existingUser = await findUserByEmail(validation.data.email);
  if (existingUser) {
    return { success: false, message: "User already exists" };
  }
  // Hash password
  const encryptedPassword = await bcrypt.hash(validation.data.password, 10);
  // create new user object
  const newUser = {
    ...validation.data,
    createdAt: new Date().toISOString(),
    role: "user",
    password: encryptedPassword,
  };

  //Save to database
  const result = await createUser(newUser);
  return result.acknowledged
    ? {
        success: true,
        message: `User created with ${result.insertedId.toString()}`,
      }
    : { success: false, message: "Failed to create user" };
};

//using google login
export async function saveOAuthUser(user, account) {
  const payload = {
    ...user,
    provider: account.provider,
    providerId: account.providerAccountId,
    role: "user",
    createdAt: new Date().toISOString(),
  };
  if (!user.email) return false;
  const isExist = await findUserByEmail(user.email);
  if (!isExist) {
    await createUser(payload);
  }
  return true;
}
