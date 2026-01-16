import { Minus, Plus } from "lucide-react";
import React from "react";

const QuantityButtons = ({
  quantity,
  min = 1,
  max = 100,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex items-center bg-slate-50 rounded-[2rem] p-1 border border-slate-100 shadow-inner">
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-slate-600 hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm cursor-pointer"
        disabled={quantity <= min}
        onClick={onDecrease}
      >
        <Minus size={14} />
      </button>

      <span className="lg:w-12 w-10 text-center font-black text-slate-800">
        {quantity}
      </span>

      <button
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-slate-600 hover:bg-green-50 hover:text-green-600 transition-colors shadow-sm cursor-pointer"
        disabled={quantity >= max}
        onClick={onIncrease}
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default QuantityButtons;
