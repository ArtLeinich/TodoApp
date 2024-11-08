// app/components/DeleteTodo.tsx

"use client";

import { deleteTodo } from "@/app/actions/todoActions";
import Button from "../ui/Button";
import { BsFillTrashFill } from "react-icons/bs";
import Form from "../ui/Form";
import { todoType } from "@/types/todoTypes";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="id" value={todo.id} />
      <Button
        actionButton
        text={<BsFillTrashFill />}
        type="submit"
      />
    </Form>
  );
};

export default DeleteTodo;
