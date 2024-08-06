import { Courses } from "@/components/Courses";
import { TopHero } from "@/components/TopHero";

export default function Home() {
  return (
    
    <main className="flex flex-col gap-y-20 py-20">
      <section className="mx-auto text-center">
        <h2 className="text-3xl mb-3">Start Learning Today!</h2>
        <p className="text-lg">
          If you don't know where to start, the courses below are your greatest choice!
        </p>
      </section>
      <div className="flex flex-col gap-y-48">
        <TopHero header="Lorem ipsum dolor sit amet, consectetur." description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet optio velit? Laudantium accusamus dicta dignissimos harum corporis ad excepturi"/>
        <TopHero
          header="Lorem ipsum dolor sit amet, consectetur."
          cardLeft
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet optio velit? Laudantium accusamus dicta dignissimos harum corporis ad excepturi"
        />
      </div>
      <Courses amountToShow={3} />
    </main>
  );
}
