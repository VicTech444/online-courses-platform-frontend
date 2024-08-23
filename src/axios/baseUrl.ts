import axios from "axios";
// https://backend-pi-orcin.vercel.app
// http://localhost:3001
export const mongoInstance = axios.create({
    baseURL: "https://backend-pi-orcin.vercel.app",
    withCredentials: true
})