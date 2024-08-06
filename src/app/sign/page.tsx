"use client";

import { SignForm } from "@/components/SignForm";
import { signItemList } from "@/helpers/useFormSignItem";
import Link from "next/link";

export default function Home() {
  let signItems = signItemList();

  return (
    <main className="flex flex-col gap-y-10 py-20">
      <h1 className="text-center text-4xl font-bold">Sign</h1>
      <SignForm FormInput={signItems} />
      <div className="flex justify-center">
        <label>
          Already have an account? <Link href={"/log/"} className="underline text-purple-500"   >Log In</Link>
        </label>
      </div>
    </main>
  );
}
