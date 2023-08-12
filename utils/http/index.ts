import axios from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";

export const API_URL = process.env.NEXT_PUBLIC_API_URL

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})


$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if(error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/api/user/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest)
        } catch (error) {
            console.log('Не авторизован');
            
        }
    }
})

export default $api;