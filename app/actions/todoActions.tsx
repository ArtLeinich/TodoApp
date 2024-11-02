// app/actions/todoActions.ts

"use server";

import { prisma } from "@/utils/prisma-client";
import { revalidatePath } from "next/cache";

export async function create(formData: FormData) {
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const priority = formData.get("priority") as string;

  if (!title.trim() || !category || !priority) {
    throw new Error("All fields are required");
  }

  await prisma.todo.create({
    data: { title, category, priority },
  });

  revalidatePath("/");
}

export async function edit(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const priority = formData.get("priority") as string;

  if (!id || !title.trim() || !category || !priority) {
    throw new Error("All fields are required");
  }

  await prisma.todo.update({
    where: { id },
    data: { title, category, priority },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const id = formData.get("id") as string;

  // Check if id is valid
  if (!id) {
    console.error("Invalid or missing ID for deletion");
    return;
  }

  await prisma.todo.delete({
    where: { id },
  });

  revalidatePath("/");
}

export async function todoStatus(formData: FormData) {
  const id = formData.get("id") as string;

  if (!id) {
    console.error("Invalid or missing ID for status update");
    return;
  }

  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  if (!todo) {
    console.error("Todo item not found");
    return;
  }

  const updatedStatus = !todo.isCompleted;

  await prisma.todo.update({
    where: { id },
    data: { isCompleted: updatedStatus },
  });

  revalidatePath("/");
}
