import axios from 'axios';


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: "Basic " + btoa(localStorage.getItem('login') + ":" + localStorage.getItem('pass')),
    },
});

export default api;
