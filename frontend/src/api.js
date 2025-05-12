import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:9011/",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers" :"*",
    },
})