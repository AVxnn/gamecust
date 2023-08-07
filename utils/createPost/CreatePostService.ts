import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import $api from "../http";

export default class CreatePostService {

    static async createPost (data: any): Promise<AxiosResponse<any>> {
        return $api.post<any>('/post/create', {data});
    }

    static async getPost (id: any): Promise<AxiosResponse<any>> {
        return $api.get<any>(`/post/getPost/${id}`);
    }

    static async reSavePost (id: any, data: any): Promise<AxiosResponse<any>> {
        return $api.post<any>(`/post/update/${id}`, {data});
    }

}