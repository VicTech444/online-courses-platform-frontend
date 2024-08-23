"use client"

import { useRouter } from "next/navigation";

export default function Custom404() {
    const router = useRouter();
    router.replace('/')

    return (
      <div>
        <h1>404 - Page not found</h1>
        <p>Sorry, redirecting you to the main page.</p>
      </div>
    );
  }