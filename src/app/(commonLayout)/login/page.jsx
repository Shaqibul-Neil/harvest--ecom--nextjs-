import LoginForm from "@/components/form/LoginForm";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";
import loginPic from "@/assets/login.webp";

const Login = () => {
  return (
    <div className="mx-auto my-16 md:max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-6 rounded-lg bg-green-50/50">
      {/* Left: Form */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <div className="flex gap-1 items-center justify-center">
            <Sparkles className="w-6 h-6 text-gray-600" />
            <p className="text-gray-600 text-lg">
              Login to <span className="text-green-800 font-bold">Harvest</span>
            </p>
          </div>
          <h2 className="text-2xl text-gray-600">
            Welcome back, let’s continue
          </h2>
        </div>

        <div className="">
          <LoginForm />
        </div>
      </div>

      {/* Right: Image Placeholder */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-full h-96 rounded-lg flex items-center justify-center text-gray-500">
          <Image
            src={loginPic}
            alt="Vegetables in cart"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
