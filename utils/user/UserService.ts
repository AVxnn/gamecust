import { AxiosResponse } from "axios";
import { IUser } from "../../models/IUser";
import { AuthResponse } from "../../models/response/AuthResponse";
import $api from "../http";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/user/getUsers')
    }

    static fetchUser(username: any): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>(`/user/getUser/${username}`)
    }
}