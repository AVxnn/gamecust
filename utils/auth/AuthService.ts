import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import $api from "../http";

export default class AuthService {

    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/user/login', {email, password});
    }

    static async registration(username: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/user/registration', {username, email, password});
    }

    static async updateSubs(id: string, uId: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/user/addSubscriptions', {id, uId});
    }

    static async logout(): Promise<void> {
        return $api.post('/api/user/logout');
    }

    static async check(): Promise<AxiosResponse<AuthResponse>> {
        return $api.get<AuthResponse>(`/api/user/refresh`, {withCredentials: true})
    }
}