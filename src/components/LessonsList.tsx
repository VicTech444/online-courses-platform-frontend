"use client";

import { usePathname } from "next/navigation";
import { useCallLesson } from "@/react-query/callLesson";
import { useCallCourse } from "@/react-query/callCourse";
import Image from "next/image";

import { useContext, useEffect } from "react";
import Link from "next/link";
import { CourseContext } from "@/context/courseContext";

export const LessonsList = () => {
  const url = usePathname();
  const courseExp = /\/courses\/(.+)/;
  const courseName = courseExp.exec(url)![1];

  let { queryResponse: LessonResponse } = useCallLesson(courseName);
  let { queryResponse: courseResponse } = useCallCourse(courseName);
  let { setCourseContext } = useContext(CourseContext);

  useEffect(() => {
    const courseContext = {
      courseInfo: courseResponse.data?.courses,
      lessonsInfo: LessonResponse.data?.courses,
    };
    setCourseContext(courseContext);
  }, [LessonResponse.data?.courses, courseResponse.data?.courses]);

  if (LessonResponse.isFetching) {
    return <div>Loading Content...</div>;
  }

  if (LessonResponse.error) {
    return <div>Error while loading the content, try again later</div>;
  }

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-4xl font-bold">Course Content</h2>
        <div className="grid grid-flow-row gap-y-4">
          {LessonResponse.data?.courses.map((course) => (
            <Link
              className="flex max-w-[700px] flex-col"
              key={course._id}
              href={`/courses/javascript/taken/${course._id}`}
            >
              <div className="flex flex-col gap-y-3 rounded-b-md bg-black p-4 text-white">
                <h3 className="text-[20px] font-bold">
                  Lesson {course.order}: {course.title}
                </h3>
                <p className="text-base font-light">{course.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Image
          src={courseResponse.data?.courses.image!}
          alt="Sample alt for images (all alts are the same)"
          className="aspect-video rounded-t-md object-cover"
          width={400}
          height={280}
        />
        <div className="flex flex-col gap-y-3 rounded-b-md bg-black p-4 text-white">
          <h3 className="text-[20px] font-bold">About this course</h3>
          <p className="text-base font-light">
            {courseResponse.data?.courses.lessons.length} Lessons
          </p>
          <p className="text-base font-light">Free!</p>
        </div>
      </div>
    </div>
  );
};
