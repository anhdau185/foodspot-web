import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "error" | "warning";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
}) => {
  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-sm rounded-full ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
};
