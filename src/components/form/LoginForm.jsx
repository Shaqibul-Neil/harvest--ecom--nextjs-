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

/* ---------------- Schema ---------------- */
const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

/* ---------------- Component ---------------- */
const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="space-y-6">
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

          <div className="flex justify-between items-center gap-4 md:flex-row flex-col">
            <div className="flex gap-1 items-center">
              <p>Don’t have an account?</p>
              <Link href={"/register"} className="text-green-800 font-bold">
                Register
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-48 h-11 cursor-pointer"
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
