import { collections } from "@/lib/constants";
import { dbConnect } from "@/lib/dbConnect";
const usersCollection = () => dbConnect(collections.USERS);

// Find user by email
export const findUserByEmail = async (email) => {
  return await usersCollection().findOne({ email });
};

// Create new user
export const createUser = async (userData) => {
  return await usersCollection().insertOne(userData);
};
//update user last login
export const updateUserLastLogin = async (email) => {
  return await usersCollection().updateOne(
    { email },
    { $set: { lastLoginAt: new Date().toISOString() } }
  );
};
