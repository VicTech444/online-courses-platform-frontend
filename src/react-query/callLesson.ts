import { mongoInstance } from "@/axios/baseUrl";
import { LessonsProps } from "@/interfaces/interfaces";
import { useQuery } from "@tanstack/react-query";

const LessonsRequest = async (courseName: string) => {
    try {

        let res = await mongoInstance.post('/lessons/specificLessons/', {courseName});

        if (res.status >= 200 || res.status <= 299) {
            return res.data as LessonsProps
        } else {
            throw new Error('An error ocurred while fetching the data')
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export const useCallLesson = (courseName: string) => {
    let queryResponse = useQuery({
        queryKey: ['lessonsData'],
        queryFn: () => LessonsRequest(courseName),
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        refetchOnMount: false,
    });

    return { queryResponse }
}
