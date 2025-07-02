import React from "react";

export function Button({ children, variant = "default", size = "md", ...props }) {
  const base = "rounded px-3 py-2 font-medium";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
}
