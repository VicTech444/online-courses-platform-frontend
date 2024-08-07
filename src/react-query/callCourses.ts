import { mongoInstance } from "@/axios/baseUrl";
import { CoursesProps } from "@/interfaces/interfaces";
import { useQuery } from "@tanstack/react-query";

const coursesRequest = async (amountOfCourses: number | undefined): Promise<CoursesProps> => {
    try {
        if (amountOfCourses) {

        }

        let res = await mongoInstance.get('/courses/showAllCourses/');

        if (res.status >= 200 || res.status <= 299) {
            return res.data as CoursesProps;
        } else {
            throw new Error('An error ocurred while fetching the data')
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export const useCallCourses = (amountOfCourses: number | undefined) => {
    let queryResponse = useQuery({
        queryKey: ['coursesData'],
        queryFn: () => coursesRequest(amountOfCourses),
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        refetchOnMount: false,
    });

    return { queryResponse }
}
