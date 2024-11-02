// app/components/ui/Button.tsx

import React, { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: ReactNode; 
  onClick?: () => void; 
  actionButton?: boolean; 
  disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  text,
  onClick,
  actionButton = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ${
        actionButton ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
    >
      {text}
    </button>
  );
};

export default Button;
