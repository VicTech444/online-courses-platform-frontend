import { FC } from "react";

interface Props {
  amountToShow: number;
}

export const Courses: FC<Props> = ({ amountToShow }) => {
  return (
    <section className="flex flex-col gap-y-10">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold">Courses</h2>
        <h3 className="text-xl">List of all courses on the platform</h3>
      </div>
    </section>
  );
};
