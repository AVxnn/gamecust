import { AxiosResponse } from "axios";
import { IUser } from "../../models/IUser";
import { AuthResponse } from "../../models/response/AuthResponse";
import $api from "../http";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/user/getUsers')
    }

    static fetchUser(id: any): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>(`/user/getUser/${id}`)
    }
}