import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import $api from "../http";

export default class CreateCommentsService {

    static async createСomment (data: any): Promise<AxiosResponse<any>> {
        return $api.post<any>('/api/comment/create', {data});
    }

    static async getPost (id: any): Promise<AxiosResponse<any>> {
        return $api.get<any>(`/api/post/getPost/${id}`);
    }

    static async reSavePost (id: any, data: any): Promise<AxiosResponse<any>> {
        return $api.post<any>(`/api/post/update/${id}`, {data});
    }

    static async updatePost (id: any, data: any): Promise<AxiosResponse<any>> {
        return $api.post<any>(`/api/post/update/${id}`, {data});
    }

    static async deletePost (id: any): Promise<AxiosResponse<any>> {
        return $api.get<any>(`/api/post/delete/${id}`);
    }

}