"use client"

import { Courses } from "@/components/Courses";
import { TopHero } from "@/components/TopHero";

export default function Home() {
  return (
    <main className="py-20 flex flex-col gap-y-20">
      <TopHero header="Free courses for frontend and backend developers!" showDiscount description="Join with a thousand of students!"/>
    </main>
  );
}
