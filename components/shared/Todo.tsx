import { todoType } from "@/types/todoTypes";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import ChangeTodo from "./ChangeTodo";

const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted ? "line-through" : "none",
    opacity: todo.isCompleted ? 0.5 : 1,
  };

  return (
    <div className="flex justify-between items-center p-4 border rounded-lg mb-2" style={todoStyle}>
      <ChangeTodo todo={todo} />
      <div className="flex-grow ml-4">
        <h3 className="font-bold">{todo.title}</h3>
        <p>Category: {todo.category}</p>
        <p>Priority: {todo.priority}</p>
      </div>
      <div className="flex gap-2">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
