import React from "react";

const IconButton = ({
  icon: Icon,
  onClick,
  className = "",
  size = 18,
  color = "text-green-600",
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-11 h-11
    flex justify-center items-center
    bg-slate-200 rounded-xl shadow-xl shadow-slate-200/50
    hover:bg-slate-900
    transition-all cursor-pointer duration-500 active:scale-90 ${className}`}
    >
      <Icon size={size} className={`${color} w-5 h-5 stroke-[2.5px]`} />
    </button>
  );
};

export default IconButton;
