import axios from "axios";
// https://online-backend.vercel.app/
// https://localhost:3001
export const mongoInstance = axios.create({
    baseURL: "https://online-backend.vercel.app/",
    withCredentials: true
})