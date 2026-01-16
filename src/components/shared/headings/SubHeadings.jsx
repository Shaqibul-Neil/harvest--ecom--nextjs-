import React from "react";
import { MdOutlineStart } from "react-icons/md";

const SubHeadings = ({ children, className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-6 h-px bg-green-500 rounded-full" />
      <h4 className="text-green-600 font-black text-xs uppercase tracking-[0.25em]">
        {children}
      </h4>
    </div>
  );
};

export default SubHeadings;
