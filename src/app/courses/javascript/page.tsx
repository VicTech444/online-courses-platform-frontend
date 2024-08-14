import { LessonsList } from "@/components/LessonsList";
import { TopHero } from "@/components/TopHero";

export default function Home() {
    

    return (
      <main className="py-20 flex flex-col gap-y-20">
        <TopHero header="Free courses for frontend and backend developers!" description="Join with a thousand of students!"/>
        <LessonsList />
      </main>
    );
  }