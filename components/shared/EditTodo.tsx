"use client";
import { useState } from "react";
import { todoType } from "@/types/todoTypes";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { BiEdit } from "react-icons/bi";
import { edit } from "@/app/actions/todoActions";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newCategory, setNewCategory] = useState(todo.category);
  const [newPriority, setNewPriority] = useState(todo.priority);

  const handleEditToggle = () => setEditMode(!editMode);

  const handleFormSubmit = () => setEditMode(false);

  return (
    <div className="flex gap-2 items-center">
      <Button
        onClick={handleEditToggle}
        text={<BiEdit />}
        type="button"
        disabled={todo.isCompleted} // disabling the button if the task is completed
      />
      {editMode && (
        <Form action={edit} onSubmit={handleFormSubmit} className="flex gap-2">
          <input type="hidden" name="id" value={todo.id} />
          <Input
            name="title"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Edit title..."
          />
          <select
            name="category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="Work">Work</option>
            <option value="Study">Study</option>
            <option value="Health">Health</option>
            <option value="Shopping">Shopping</option>
            <option value="Personal">Personal</option>
          </select>
          <select
            name="priority"
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <Button type="submit" text="Save" />
        </Form>
      )}
    </div>
  );
};

export default EditTodo;
