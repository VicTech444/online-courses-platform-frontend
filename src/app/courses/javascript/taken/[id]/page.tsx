"use client";

import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";
import { Course, Lessons } from "@/interfaces/interfaces";
import ReactMarkdown from "react-markdown";
import "@/styles/markdown.css";
import React from "react";
import { PercentageBar } from "@/components/PercentageBar";
import { PercentageCircular } from "@/components/PercentageCircle";
import { CourseContext } from "@/context/courseContext";

const CourseDetails = () => {
  let [content, setContent] = useState<string | null>(null);
  let { courseContext } = useContext(CourseContext);
  const router = useRouter();

  let {
    courseInfo,
    lessonsInfo,
  }: { courseInfo: Course; lessonsInfo: Lessons[] } = courseContext;

  useEffect(() => setContent(lessonsInfo[0].lessonContent), [lessonsInfo]);
  
  if (!courseContext) {
    router.push("/courses/");
    setTimeout(() => window.location.reload(), 1000);
    return;
  }

  return (
    <div className="flex">
      <aside className="max-w-[25rem] overflow-y-scroll py-4 pl-4 md:min-w-[25rem]">
        <h1 className="mr-2 rounded-md bg-[#1D1D1D] px-4 py-6 text-3xl font-semibold">
          {courseInfo.title}
          <PercentageBar />
        </h1>
        <div className="mt-2 flex flex-col gap-y-2 px-4 py-2">
          {lessonsInfo.map((lesson) => {
            return (
              <div
                onClick={() => setContent(lesson.lessonContent)}
                className="flex cursor-pointer items-end gap-x-2"
                key={lesson._id}
              >
                <PercentageCircular />
                Lesson {lesson.order}: {lesson.title}
              </div>
            );
          })}
        </div>
      </aside>
      <main className="flex h-[90.8vh] w-full flex-col py-4 pr-4">
        <div className="markdown-content max-h-[80vh] overflow-y-scroll bg-[#1D1D1D] px-4 py-8">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="h-[2px] w-full bg-[#575757]"></div>
        <div className="flex h-[10%] w-full items-center justify-center bg-[#1D1D1D]">
          <button className="flex items-center justify-center bg-[#2E0C67] px-4 py-2 text-sm">
            Complete and continue
          </button>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
