"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Headset, RotateCcw, ShieldCheck } from "lucide-react";
import SubHeadings from "../shared/headings/SubHeadings";
import MainHeadings from "../shared/headings/MainHeadings";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Truck size={24} />,
      title: "Free Shipping",
      desc: "Free shipping on all order or order above $200",
      iconColor: "text-green-600",
    },
    {
      icon: <Headset size={24} />,
      title: "24X7 Support",
      desc: "Contact us 24 hours live support, 7 days in a week",
      iconColor: "text-green-600",
    },
    {
      icon: <RotateCcw size={24} />,
      title: "30 Days Return",
      desc: "Simply return it within 30 days for an exchange",
      iconColor: "text-green-600",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Payment Secure",
      desc: "Contact us 24 hours live support, 7 days in a week",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="max-w-[1440px] w-11/12 mx-auto overflow-x-clip text-black">
      <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-sm p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div
                className={`${feature.iconColor} shrink-0 mt-1`}
              >
                {feature.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm md:text-base font-black text-slate-700 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-400 font-medium leading-relaxed text-[0.7rem] md:text-xs max-w-[180px]">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
