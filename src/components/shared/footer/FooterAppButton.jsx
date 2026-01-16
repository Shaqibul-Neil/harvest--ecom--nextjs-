import React from "react";
import { Smartphone } from "lucide-react";

const FooterAppButton = () => {
  return (
    <div className="flex gap-4">
      <button className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-slate-100 active:scale-95">
        <Smartphone size={20} />
        <div className="text-left font-black">
          <div className="text-[10px] uppercase opacity-60 tracking-widest">
            Get it on
          </div>
          <div className="text-xs uppercase tracking-wider">Google Play</div>
        </div>
      </button>
      <button className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-slate-100 active:scale-95">
        <div className="w-5 h-5 fill-current">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.08.05-2.37.74-3.14 1.61-.69.77-1.28 2.01-1.11 3.15 1.19.09 2.4-.6 3.18-1.65" />
          </svg>
        </div>
        <div className="text-left font-black">
          <div className="text-[10px] uppercase opacity-60 tracking-widest">
            Download on
          </div>
          <div className="text-xs uppercase tracking-wider">App Store</div>
        </div>
      </button>
    </div>
  );
};

export default FooterAppButton;
