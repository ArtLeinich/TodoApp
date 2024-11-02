"use client";

import Form from "../ui/Form";
import Button from "../ui/Button";
import { todoStatus } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoTypes";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  const handleStatusChange = async (formData: FormData) => {
    await todoStatus(formData);
  };

  return (
    <Form action={handleStatusChange} className="flex">
      <input type="hidden" name="id" value={todo.id} />
      <Button
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle />}
        disabled={false} 
      />
    </Form>
  );
};

export default ChangeTodo;
