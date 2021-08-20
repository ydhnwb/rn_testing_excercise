import axios  from 'axios';

const API = axios.create({
    baseURL: "https://golang-heroku.herokuapp.com/api/",
    timeout: 1000 * 30,
    transformResponse: [
        (response) => {
            return JSON.parse(response)
        }
    ]
})

export default API;