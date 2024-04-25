import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import { AuthResponse } from "../models/response/AuthResponse";
import AuthService from "../utils/auth/AuthService";
import { API_URL } from "../utils/http";
import { signOut } from "next-auth/react";

export default class MobxStore {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
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
      console.log(response);

      if (response.data !== undefined) {
        localStorage.setItem("token", response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
        return response.data;
      }
    } catch (error: any) {
      console.log(error.response?.data?.message);
      return error.response?.data?.message;
    }
  }

  async registration(username: string, email: string, password: string) {
    try {
      const response = await AuthService.registration(
        username,
        email,
        password
      );
      console.log(response, username, email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async registrationGoogle(
    username: string,
    email: string,
    picture: string,
    sub: number,
    email_verified: boolean
  ) {
    try {
      const response = await AuthService.registrationGoogle(
        username,
        email,
        picture,
        sub,
        email_verified
      );
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);

      localStorage.removeItem("token");
      signOut();
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await AuthService.check();
      localStorage.setItem("token", response.data.accessToken);

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error: any) {
      console.log(error.response?.data?.message, error.response?.data);
    } finally {
      this.setLoading(false);
    }
  }

  async updateAuth(id: string, uId: any) {
    try {
      const response = await AuthService.updateSubs(id, uId);
      this.setUser(response.data.user);
      return response;
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async reSaveUser(data: any) {
    try {
      const response = await AuthService.reSaveUser(data);
      console.log(await response.data.user);
      this.setUser(await response.data.user);
      return response;
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async changeIcon(data: any) {
    try {
      console.log(data);
      const response = await AuthService.changeIcon(data);
      this.setUser({
        ...this.user,
        iconActive: String(response?.data?.user?.iconActive),
      });
      return response;
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async deleteAvatar(data: any) {
    try {
      const response = await AuthService.deleteAvatar(data);
      return response;
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }
}
