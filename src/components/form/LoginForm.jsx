"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { signIn } from "next-auth/react";
import { toastify } from "@/lib/toast";
import { useRouter, useSearchParams } from "next/navigation";
import GoogleLoginInButton from "./GoogleLoginButton";
import TwitterLoginButton from "./TwitterLoginButton";
import FacebookLoginButton from "./FacebookLoginButton";

/* ---------------- Schema ---------------- */
const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

/* ---------------- Component ---------------- */
const LoginForm = () => {
  const router = useRouter();
  //to get the desired path before login
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    const { email, password } = values;
    const loginPromise = signIn("credentials", {
      redirect: false,
      email,
      password,
    }).then((res) => {
      //console.log(res);
      if (!res || res.error) {
        throw new Error("Invalid email or password");
      }
      return res;
    });
    toastify(loginPromise, {
      loading: "Logging you in...",
      success: () => {
        //re-route user to his desired path
        router.push(callbackUrl);
        return <span className="font-semibold">Logged in successfully</span>;
      },
      error: (err) => <span className="font-semibold">{err.message}</span>,
    });

    //console.log(res);
    // if (res?.error) {
    //   console.log("login failed");
    // } else {
    //   console.log(`logged in ${email}`);
    // }
  };

  return (
    <div className="space-y-6">
      {/* Login Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 my-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            autoComplete="off"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    disabled={isSubmitting}
                    placeholder="Enter your email address"
                    className="w-full h-11"
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
              <FormItem className="w-full">
                <FormLabel>Password*</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    disabled={isSubmitting}
                    placeholder="Enter your password"
                    className="w-full h-11"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center gap-4 lg:flex-row flex-col">
            <Link href={"/register"} className="text-green-800 font-semibold">
              Create Account?
            </Link>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-48 h-11 cursor-pointer"
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
      {/* Divider */}
      <div className="flex items-center justify-center gap-2 my-3">
        <div className="h-px w-16 bg-gray-400"></div>
        <span className="text-sm text-primary">or</span>
        <div className="h-px w-16 bg-gray-400"></div>
      </div>
      {/* Social Logins */}
      <div className="md:w-96 mx-auto">
        <div className="flex items-center gap-3">
          <GoogleLoginInButton />
          <FacebookLoginButton />
          <TwitterLoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
