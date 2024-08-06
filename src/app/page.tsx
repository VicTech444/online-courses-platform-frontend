"use client"

import { Courses } from "@/components/Courses";
import { TopHero } from "@/components/TopHero";

export default function Home() {
  const showTest = async () => {
    let testingvar = await fetch('https://backend-seven-chi-92.vercel.app/');
    let res = await testingvar.json()

    console.log(res)
  }

  return (
    <main className="py-20 flex flex-col gap-y-20">
      <TopHero header="Free courses for frontend and backend developers!" showDiscount description="Join with a thousand of students!"/>
      <Courses amountToShow={3}/>
      <button onClick={showTest}>Hola mundo</button>
    </main>
  );
}
