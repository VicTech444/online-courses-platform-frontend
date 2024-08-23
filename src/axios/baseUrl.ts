import axios from "axios";
// https://backend-pi-orcin.vercel.app
// https://localhost:3001
export const mongoInstance = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true
})