import axios from "axios";

export const mongoInstance = axios.create({
    baseURL: 'https://backend-pi-orcin.vercel.app'
})