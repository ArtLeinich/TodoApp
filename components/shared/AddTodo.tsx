// app/components/AddTodo.tsx

import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddTodo = () => {
  return (
    <Form action={create} className="flex flex-col gap-2 w-1/2 m-auto">
      <Input name="title" placeholder="Add Todo..." />
      <select name="category" className="border p-2 rounded">
        <option value="Work">Work</option>
        <option value="Study">Study</option>
        <option value="Health">Health</option>
        <option value="Shopping">Shopping</option>
        <option value="Personal">Personal</option>
      </select>
      <select name="priority" className="border p-2 rounded">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <Button type="submit" text="Add" />
    </Form>
  );
};

export default AddTodo;
