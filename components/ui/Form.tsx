// app/ui/Form.tsx

"use client"; // This makes the Form component a Client Component

import React from "react";

interface FormProps {
  action: (formData: FormData) => Promise<void>;
  children: React.ReactNode;
  className?: string;
  onSubmit?: () => void;
}

const Form: React.FC<FormProps> = ({ action, children, className, onSubmit }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await action(formData);
    if (onSubmit) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
