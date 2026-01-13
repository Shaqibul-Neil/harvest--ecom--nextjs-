import { dbConnect } from "@/lib/dbConnect"

// Find user by email
export const findUserByEmail = async (email) => {
    return await dbConnect('users').findOne({ email })
}

// Create new user
export const createUser = async (userData) => {
    return await dbConnect('users').insertOne(userData)
}