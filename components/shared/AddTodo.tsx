// app/components/AddTodo.tsx

import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddTodo = () => {
  return (
    <Form action={create} className="flex flex-col gap-2 w-full sm:w-3/4 lg:w-1/2 m-auto p-4 border rounded-md">
      <Input name="title" placeholder="Add Todo..." className="p-2 border rounded" />
      
      <div className="flex flex-col sm:flex-row gap-2">
        <select name="category" className="border p-2 rounded w-full sm:w-1/2">
          <option value="Work">Work</option>
          <option value="Study">Study</option>
          <option value="Health">Health</option>
          <option value="Shopping">Shopping</option>
          <option value="Personal">Personal</option>
        </select>
        
        <select name="priority" className="border p-2 rounded w-full sm:w-1/2">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      
      <Button type="submit" text="Add" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto self-center sm:self-start" />
    </Form>
  );
};

export default AddTodo;
