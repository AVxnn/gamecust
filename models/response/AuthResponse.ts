import { IUser } from "../IUser";

export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
    statis?: any;
    errors?: any;
}