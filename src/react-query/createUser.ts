import { mongoInstance } from "@/axios/baseUrl";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface userCreate {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const createUser = async ({ firstName, lastName, email, password }: userCreate) => {
    try {

        let res = await mongoInstance.post('/sign/signUser', { firstName, lastName, email, password });
        if (res.status >= 200 || res.status <= 299) {
            window.location.replace('log')
        }
    } catch (error: any) {
        if (error instanceof AxiosError){
            return error.response?.data.error
        }
        console.log(error)
    }
}

