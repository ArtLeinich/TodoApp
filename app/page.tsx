// app/page.tsx

import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import { prisma } from "@/utils/prisma-client";

export default async function Home() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <AddTodo />
      <div className="mt-6">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </main>
  );
}
