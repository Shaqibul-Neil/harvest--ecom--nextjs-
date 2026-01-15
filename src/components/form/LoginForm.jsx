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
        setTimeout(() => {
          window.location.reload();
        }, 500);
        router.push(callbackUrl);
        return <span className="font-semibold">Logged in successfully</span>;
      },
      error: (err) => (
        <span className="font-semibold">
          Invalid email or password. Try Google Login or Register
        </span>
      ),
    });

    //console.log(res);
    // if (res?.error) {
    //   console.log("login failed");
    // } else {
    //   console.log(`logged in ${email}`);
    // }
  };

  return (
    <div className="space-y-10 bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-2xl shadow-slate-100">
      <div className="space-y-3">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">
          Welcome Back
        </h1>
        <p className="text-slate-400 font-bold text-sm">
          Please enter your credentials to access your account
        </p>
      </div>

      {/* Login Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            autoComplete="off"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
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
              <FormItem className="w-full">
                <FormLabel className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
                  Password
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

          <div className="flex justify-between items-center gap-6 pt-2">
            <Link
              href={`/register?callbackUrl=${callbackUrl}`}
              className="text-green-600 font-black text-xs uppercase tracking-widest hover:text-green-700 transition-colors"
            >
              Create Account?
            </Link>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-10 h-14 bg-slate-900 text-white hover:bg-green-600 transition-all shadow-xl shadow-slate-100"
            >
              Login
            </Button>
          </div>
        </form>
      </Form>

      {/* Divider */}
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-100"></div>
        </div>
        <div className="relative flex justify-center text-[0.65rem] uppercase font-black tracking-widest">
          <span className="bg-white px-4 text-slate-400">Or continue with</span>
        </div>
      </div>

      {/* Social Logins */}
      <div className="flex items-center justify-center gap-4">
        <GoogleLoginInButton />
        <FacebookLoginButton />
        <TwitterLoginButton />
      </div>
    </div>
  );
};

export default LoginForm;
