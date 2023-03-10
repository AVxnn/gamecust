import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import $api from "../http";

export default class AuthService {

    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/login', {email, password});
    }

    static async registration(username: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/registration', {username, email, password});
    }

    static async logout(): Promise<void> {
        return $api.post('/user/logout');
    }
}