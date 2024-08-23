import { mongoInstance } from "@/axios/baseUrl";
import { AxiosError } from "axios";

interface userCreate {
    email: string;
    password: string;
}

export const logUser = async ({ email, password }: userCreate) => {
    try {

        let res = await mongoInstance.post('/log/logUser', { email, password });
        if (res.status >= 200 || res.status <= 299) {
            console.log(res)
            
        }
    } catch (error: any) {
        if (error instanceof AxiosError){
            return error.response?.data.error
        }
        console.log(error)
    }
}

