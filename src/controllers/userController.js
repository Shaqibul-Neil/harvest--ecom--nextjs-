'use server'

import { registerUser } from "@/services/userServices"

// Controller for user registration
export const postUser = async(payload)=>{
    return await registerUser(payload)
}