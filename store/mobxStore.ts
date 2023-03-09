import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import { AuthResponse } from "../models/response/AuthResponse";
import AuthService from "../utils/auth/AuthService";
import { API_URL } from "../utils/http";

export default class MobxStore {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response, email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error: any) {
            console.log(error.response?.data?.message)
        }
    }

    async registration(username: string, email: string, password: string) {
        try {
            const response = await AuthService.registration(username, email, password);
            console.log(response, username, email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error: any) {
            console.log(error.response?.data?.message)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            console.log(response);
            
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (error: any) {
            console.log(error.response?.data?.message)
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/user/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error: any) {
            console.log(error.response?.data?.message)
        } finally {
            this.setLoading(false);
        }
    }
}