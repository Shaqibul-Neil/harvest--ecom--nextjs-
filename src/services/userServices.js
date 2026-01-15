import { createUser, findUserByEmail } from "@/repositories/userRepository";
import { userRegisterSchema } from "@/schemas/userSchema";
import bcrypt from "bcryptjs";
import { z } from "zod";
// Validate user data
export const validateUserData = async (payload) => {
  //console.log("payload", payload);
  const parsed = userRegisterSchema.safeParse(payload);
  // console.log("parsed", parsed);
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
  //console.log("validation", validation);
  if (!validation.success) {
    return validation;
  }
  // Check if user exists
  const existingUser = await findUserByEmail(
    validation.data.email.toLowerCase().trim()
  );
  if (existingUser) {
    return { success: false, message: "User already exists" };
  }
  // Hash password
  const encryptedPassword = await bcrypt.hash(validation.data.password, 10);
  // create new user object
  const newUser = {
    ...validation.data,
    email: validation.data.email.toLowerCase().trim(),
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
export const saveOAuthUser = async (user, account) => {
  const payload = {
    ...user,
    email: user.email.toLowerCase().trim(),
    provider: account.provider,
    providerId: account.providerAccountId,
    role: "user",
    createdAt: new Date().toISOString(),
  };
  if (!user.email) return false;
  const isExist = await findUserByEmail(user.email.toLowerCase().trim());
  if (!isExist) {
    await createUser(payload);
  }
  return true;
};

export const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) return null;
  const user = await findUserByEmail(email.toLowerCase().trim());

  if (!user) return null;
  //match password
  const isPasswordOk = await bcrypt.compare(password, user.password);
  if (isPasswordOk) return user;
  else return null;
};
