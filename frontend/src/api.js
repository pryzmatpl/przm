import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:9011/",
    headers: {
        "Content-Type": "application/json",
    },
    // You can optionally add this to make cookies/auth work across domains
    withCredentials: true,
})