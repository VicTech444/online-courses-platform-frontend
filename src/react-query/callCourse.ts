import { mongoInstance } from "@/axios/baseUrl";
import { CourseProps } from "@/interfaces/interfaces";
import { useQuery } from "@tanstack/react-query";

const courseRequest = async (courseName: string) => {
    try {

        let res = await mongoInstance.post('/courses/specificCourse', {courseName});

        if (res.status >= 200 || res.status <= 299) {
            return res.data as CourseProps
        } else {
            throw new Error('An error ocurred while fetching the data')
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export const useCallCourse = (courseName: string) => {
    let queryResponse = useQuery({
        queryKey: ['courseData'],
        queryFn: () => courseRequest(courseName),
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        refetchOnMount: false,
    });

    return { queryResponse }
}
