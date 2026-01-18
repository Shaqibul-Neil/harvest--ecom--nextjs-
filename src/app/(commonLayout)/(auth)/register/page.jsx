import RegisterForm from "@/components/form/RegisterForm";
import FadeInUp from "@/components/animation/FadeInUp";
import ScaleIn from "@/components/animation/ScaleIn";
import { Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";
import React from "react";
import MainHeadings from "@/components/shared/headings/MainHeadings";

export const metadata = {
  title: "Register | Harvest",
  description:
    "Create your Harvest account and start shopping fresh organic products",
};

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 py-10 md:py-16 px-4">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-lime-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header Section */}
        <FadeInUp delay={0.1}>
          <div className="text-center mb-10 md:mb-14 space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl px-5 py-2.5 rounded-full shadow-lg shadow-green-100/50 border border-green-100/50">
              <Sparkles size={16} className="text-green-500" />
              <span className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-green-600">
                Join Our Community
              </span>
            </div>
            <MainHeadings highlight={"Harvest"} text="Account">
              Create Your{" "}
            </MainHeadings>

            <p className="text-slate-400 font-medium text-sm md:text-base max-w-xl mx-auto">
              Join thousands of happy customers enjoying fresh, organic products
              delivered straight from farm to your table.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <Users size={18} className="text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-black text-slate-800">50K+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Happy Customers
                  </p>
                </div>
              </div>

              <div className="w-px h-10 bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Leaf size={18} className="text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-black text-slate-800">100%</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Organic Products
                  </p>
                </div>
              </div>

              <div className="w-px h-10 bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-lime-50 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-lime-600" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-black text-slate-800">Secure</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Data Protection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Form Section */}
        <ScaleIn delay={0.3}>
          <div className="relative">
            {/* Decorative Elements behind form */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-100/50 via-emerald-50/30 to-lime-100/50 rounded-[3rem] blur-2xl" />

            {/* Form Container */}
            <div className="relative">
              <RegisterForm />
            </div>
          </div>
        </ScaleIn>

        {/* Footer Trust Section */}
        <FadeInUp delay={0.5}>
          <div className="text-center mt-10 md:mt-14">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck size={16} className="text-green-500" />
                <span className="text-xs font-bold">SSL Encrypted</span>
              </div>
              <div className="w-1 h-1 bg-slate-300 rounded-full" />
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-xs font-bold">GDPR Compliant</span>
              </div>
              <div className="w-1 h-1 bg-slate-300 rounded-full" />
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-xs font-bold">No Spam Promise</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-4 max-w-md mx-auto">
              By creating an account, you agree to our Terms of Service and
              Privacy Policy. We respect your privacy and will never share your
              data.
            </p>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

export default Register;
