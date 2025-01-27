// app/page.tsx

import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import { prisma } from "@/utils/prisma-client";

export default async function Home() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Todo List
      </h1>
      <AddTodo />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {todos.map((todo) => (
          <div key={todo.id} className="p-4 border rounded-lg shadow-lg bg-white space-y-2 flex flex-col justify-between">
            <Todo todo={todo} />
          </div>
        ))}
      </div>
    </main>
  );
}
