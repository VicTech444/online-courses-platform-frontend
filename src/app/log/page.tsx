"use client";

import { LoginForm } from "@/components/LoginForm";
import { useFormItemList } from "../../helpers/useFormItemLists";
import Link from "next/link";

export default function Home() {
  let formInputs = useFormItemList();

  return (
    <main className="flex flex-col gap-y-10 py-20">
      <h1 className="text-center text-4xl font-bold">Login</h1>
      <LoginForm FormInput={formInputs} />
      <div className="flex justify-center">
        <label>
          Don't have your account?{" "}
          <Link href={"/sign/"} className="underline text-purple-500">Create your account</Link>
        </label>
      </div>
    </main>
  );
}
