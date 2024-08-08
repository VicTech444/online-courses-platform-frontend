import { CoursesProps } from "@/interfaces/interfaces";
import { UseQueryResult } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export const CoursesList = ({queryResponse}: {queryResponse: UseQueryResult<CoursesProps, Error>}) => {
    
    if (queryResponse.isFetching){
        return (
            <div>Loading Content...</div>
        )
    }

    if (queryResponse.error) {
        return (
            <div>Error while loading the content, try again later</div>
        )
    }

    return (
        <div className="grid min-[1199px]:grid-cols-3">
            {
                queryResponse.data?.courses.map(course => (
                    <Link href={`/courses/${course.nextPath}/`} className="px-4 pb-6 flex flex-col" key={course._id}>
                         <Image src={course.image} alt="Sample alt for images (all alts are the same)" className="object-cover aspect-video rounded-t-md" width={500} height={320}/>
                         <div className="p-4 bg-black text-white flex flex-col gap-y-3 rounded-b-md">
                            <h3 className="text-[20px] font-bold">{course.title}</h3>
                            <p className="text-base font-light">{course.description}</p>
                            <span className="text-[#e8d2ff] mt-2 text-xl font-bold">For Free!</span>
                         </div>
                    </Link>
                ))
            }
        </div>
    )
}