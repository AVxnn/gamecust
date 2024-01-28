import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import $api from "../http";

export default class CreatePostService {
  static async createPost(data: any): Promise<AxiosResponse<any>> {
    return $api.post<any>("/api/post/create", { data });
  }

  static async getPost(id: any): Promise<AxiosResponse<any>> {
    return $api.get<any>(`/api/post/getPost/${id}`);
  }

  static async reSavePost(data: any): Promise<AxiosResponse<any>> {
    return $api.post<any>(`/api/post/update`, { data });
  }

  static async addLike(data: any): Promise<AxiosResponse<any>> {
    return $api.post<any>(`/api/post/like`, data);
  }

  static async deletePost(id: any): Promise<AxiosResponse<any>> {
    return $api.get<any>(`/api/post/delete/${id}`);
  }
}
