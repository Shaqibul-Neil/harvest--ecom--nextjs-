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
import { handleApiError, toastify } from "@/lib/toast";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  //to get the desired path before login
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const form = useForm({
    resolver: zodResolver(userRegisterSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
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
    const registerAndLogin = async () => {
      //register user
      const res = await postUser(values);
      //error handler
      const data = await handleApiError(res);
      //successful registration then login
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: callbackUrl,
      });
      return data;
    };
    toastify(registerAndLogin(), {
      loading: "Saving and creating account...",
      success: () => {
        //re-route user to his desired path
        setTimeout(() => {
          window.location.reload();
        }, 500);
        router.push(callbackUrl);
        return (
          <span className="font-semibold">
            Account created! Logging you in....
          </span>
        );
      },
      error: (err) => <span className="font-semibold">{err.message}</span>,
    });
  };

  return (
    <div className="space-y-10 bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-2xl shadow-slate-100">
      <div className="space-y-3">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">
          Create Account
        </h1>
        <p className="text-slate-400 font-bold text-sm">
          Join Harvest and start your premium shopping experience
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                    First Name*
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Enter your first name"
                      className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.65rem] font-bold" />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                    Last Name*
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Enter your last name"
                      className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.65rem] font-bold" />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              type="email"
              autoComplete="off"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                    Email Address*
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      disabled={isSubmitting}
                      placeholder="Enter your email address"
                      className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.65rem] font-bold" />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                    Password*
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      disabled={isSubmitting}
                      placeholder="Enter your password"
                      className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.65rem] font-bold" />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                    Phone Number*
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      inputMode="numeric"
                      disabled={isSubmitting}
                      placeholder="Enter your phone number"
                      className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.65rem] font-bold" />
                </FormItem>
              )}
            />
            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Write Your Address"
                      className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.65rem] font-bold" />
                </FormItem>
              )}
            />

            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                    City*
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="City"
                      className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.65rem] font-bold" />
                </FormItem>
              )}
            />

            {/* Postal Code */}
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                    Post Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      disabled={isSubmitting}
                      placeholder="Post Code"
                      className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.65rem] font-bold" />
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                    Country*
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Country"
                      className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.65rem] font-bold" />
                </FormItem>
              )}
            />

            {/* State */}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                    Region / State
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Region / State"
                      className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.65rem] font-bold" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between items-center gap-6 pt-6 flex-wrap">
            <div className="flex gap-2 items-center">
              <p className="text-slate-400 font-bold text-sm">
                Have an account?
              </p>
              <Link
                href={"/login"}
                className="text-green-600 font-black text-xs uppercase tracking-widest hover:text-green-700 transition-colors"
              >
                Login
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-10 h-14 bg-slate-900 text-white hover:bg-green-600 transition-all shadow-xl shadow-slate-100"
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
