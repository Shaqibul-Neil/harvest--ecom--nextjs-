import RegisterForm from "@/components/form/RegisterForm";
import { Sparkles } from "lucide-react";
import React from "react";

const Register = () => {
  return (
    <div className="mx-auto my-16 md:max-w-3xl w-full space-y-10">
      <div className="text-center space-y-2">
        <div className="flex gap-1 items-center justify-center">
          <Sparkles className="w-6 h-6 text-gray-600" />
          <p className="text-gray-600 text-lg">
            Register With{" "}
            <span className="text-green-800 font-bold">Harvest</span>
          </p>
        </div>
        <h2 className="text-2xl text-gray-600">
          Best Places to buy and sell fresh products
        </h2>
      </div>

      <div className="p-6 rounded-lg bg-green-50/50">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
