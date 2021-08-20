import axios, { AxiosError } from 'axios';

const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 1000 * 30,
    transformResponse: [
        (response) => {
            return JSON.parse(response)
        }
    ]
})

export default API;