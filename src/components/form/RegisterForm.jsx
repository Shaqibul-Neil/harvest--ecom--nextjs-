"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { userRegisterSchema } from "@/schemas/userSchema";
import { postUser } from "@/controllers/userController";

/* ---------------- Schema ---------------- */
// const formSchema = z.object({
//   firstName: z.string().min(3, "First name must be at least 3 characters"),
//   lastName: z.string().min(2, "Last name must be at least 2 characters"),
//   email: z.email("Invalid email address"),
//   password: z
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .regex(/[a-z]/, "Password must contain at least one lowercase letter")
//     .regex(/[0-9]/, "Password must contain at least one number")
//     .regex(
//       /[!@#$%^&*(),.?":{}|<>]/,
//       "Password must contain at least one special character"
//     ),
//   phoneNumber: z.string().min(11, "Phone number must be at least 11 digits"),
//   address: z.string().optional(),
//   city: z.string().min(1, "City is required"),
//   postalCode: z.string().optional(),
//   country: z.string().min(1, "Country is required"),
//   state: z.string().optional(),
// });

/* ---------------- Component ---------------- */
const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(userRegisterSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      state: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    // TEST: Empty object validation check for backend
    // const testResult = await postUser({});
    // console.log("Backend validation result:", testResult);
    //save the user in database
    const result = await postUser(values);
    alert(result.message);
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 my-4">
          <div className="flex justify-between items-center md:flex-row flex-col gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full md:w-auto">
                  <FormLabel>First Name*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Enter your first name"
                      className="md:w-80 lg:w-88 w-full h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full md:w-auto">
                  <FormLabel>Last Name*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Enter your last name"
                      className="md:w-80 lg:w-88 w-full h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between items-center md:flex-row flex-col gap-6">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              type="email"
              autoComplete="off"
              render={({ field }) => (
                <FormItem className="w-full md:w-auto">
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      disabled={isSubmitting}
                      placeholder="Enter your email address"
                      className="md:w-80 lg:w-88 w-full h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full md:w-auto">
                  <FormLabel>Password*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      disabled={isSubmitting}
                      placeholder="Enter your password"
                      className="md:w-80 lg:w-88 w-full h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center md:flex-row flex-col gap-6">
            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full md:w-auto">
                  <FormLabel>Phone Number*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      inputMode="numeric"
                      disabled={isSubmitting}
                      placeholder="Enter your phone number"
                      className="md:w-80 lg:w-88 w-full h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full md:w-auto">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Write Your Address"
                      className="md:w-80 lg:w-88 w-full  h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center md:flex-row flex-col gap-6">
            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-full md:w-auto">
                  <FormLabel>City*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="City"
                      className="md:w-80 lg:w-88 w-full  h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Postal Code */}
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem className="w-full md:w-auto">
                  <FormLabel>Post Code</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      disabled={isSubmitting}
                      placeholder="Post Code"
                      className="md:w-80 lg:w-88 w-full h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center md:flex-row flex-col gap-5">
            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full md:w-auto">
                  <FormLabel>Country*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Country"
                      className="md:w-80 lg:w-88 w-full  h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* State */}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="w-full md:w-auto">
                  <FormLabel>Region / State</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Region / State"
                      className="md:w-80 lg:w-88 w-full h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center gap-4 md:flex-row flex-col">
            <div className="flex gap-1 items-center">
              <p>Have an account?</p>
              <Link href={"/login"} className="text-green-800 font-bold">
                Login
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-48 h-11 cursor-pointer"
            >
              Register
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
