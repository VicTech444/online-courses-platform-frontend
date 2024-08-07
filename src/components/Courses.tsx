"use client"

import { FC } from "react";
import { useCallCourses } from "@/react-query/callCourses";
import { CoursesList } from "./CoursesList";

interface Props {
  amountToShow?: number;
}

export const Courses: FC<Props> = ({ amountToShow }) => {
  let { queryResponse } = useCallCourses(amountToShow);
  
  return (
    <section className="flex flex-col gap-y-10">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold">Courses</h2>
        <h3 className="text-xl">List of all courses on the platform</h3>
      </div>
      <CoursesList queryResponse={queryResponse}/>
    </section>
  );
};
