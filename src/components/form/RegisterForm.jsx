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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." }),
  email: z.email({ message: "Invalid email address" }),
});

const RegisterForm = () => {
  // Define your form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "", // match schema exactly
      email: "",
    },
  });
  // Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values);
  }

  const { isSubmitting, isValid } = form.formState;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-600">
          Register With{" "}
          <span className="text-green-800 font-bold">Harvest</span>{" "}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 my-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full h-11"
                    type="text"
                    disabled={isSubmitting}
                    placeholder="Enter Your Full Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="w-full h-11"
                    disabled={isSubmitting}
                    placeholder="Enter Your Email Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isSubmitting || !isValid}
            type="submit"
            className="w-full h-11"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
