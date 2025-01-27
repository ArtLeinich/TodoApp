// app/ui/Input.tsx

import React from "react";

interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ name, type = "text", placeholder, value, onChange, className }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border p-2 rounded ${className}`}
    />
  );
};

export default Input;
