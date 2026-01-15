import { z } from "zod";

export const userRegisterSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, "First name must be at least 3 characters"),

  lastName: z.string().trim().min(2, "Last name must be at least 2 characters"),

  email: z.email("Invalid email address").trim().toLowerCase(),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character"
    ),

  phoneNumber: z
    .string()
    .trim()
    .min(11, "Phone number must be at least 11 digits"),

  address: z.string().trim().optional(),

  city: z.string().trim().min(1, "City is required"),

  postalCode: z.string().trim().optional(),

  country: z.string().trim().min(1, "Country is required"),

  state: z.string().trim().optional(),
});
