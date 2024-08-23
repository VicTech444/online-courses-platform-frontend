import axios from "axios";
// https://backend-pi-orcin.vercel.app
export const mongoInstance = axios.create({
    baseURL: "https://backend-pi-orcin.vercel.app"
})