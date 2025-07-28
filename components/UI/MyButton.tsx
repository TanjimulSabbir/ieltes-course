"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function MyButton({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-[#1cab55] text-white border-b-4 border-b-green-700
        rounded-md px-4 py-1.5
        transition-all duration-300 hover:bg-green-600 ease-in-out
        select-none box-border
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}
