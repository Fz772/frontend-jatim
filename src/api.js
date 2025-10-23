import axios from "axios";


const token = localStorage.getItem('token');
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": token ? `Bearer ${token}` : ""
    }   
})
console.log('token shfghjsdf: ', token)

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log('token ada ', token)
            config.headers.Authorization = `Bearer ${token}`;
        } else
        {
            console.log('token gada', token)
            delete config.headers.Authorization;
        } return config
    }, (error) => Promise.reject(error)
);


export default api;