import React from "react";

const IconButton = ({
  icon: Icon,
  onClick,
  className = "",
  size = 20,
  color = "text-green-600",
  stroke = 2.5,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10
    flex justify-center items-center
    bg-white rounded-md shadow
    hover:bg-slate-800
    transition cursor-pointer duration-500 ${className}`}
    >
      <Icon size={size} className={color} />
    </button>
  );
};

export default IconButton;
