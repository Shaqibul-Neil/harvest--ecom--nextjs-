import React from "react";
import { MdOutlineStart } from "react-icons/md";

const SubHeadings = ({ children }) => {
  return (
    <div className="flex gap-1">
      <MdOutlineStart className="w-6 h-6 text-green-600" />
      <h4 className="text-green-600 font-semibold">{children}</h4>
    </div>
  );
};

export default SubHeadings;
