"use client"

import {LoginForm}  from "@/components/Form";

export default function Home() {
  return (
    <main className="py-20 flex flex-col gap-y-10">
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <LoginForm />
    </main>
  );
}
