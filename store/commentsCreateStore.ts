import { makeAutoObservable } from "mobx";
import CreateCommentsService from "../utils/createComments/CreateCommentService";

export default class CommentsCreateStore {
  constructor() {
    makeAutoObservable(this);
  }

  async createComment(user: any, data: any, dataS: any) {
    try {
      const comment = {
        text: data.text,
        image: data.image,
        user: user.id,
        postId: data.postId,
        receiver: data.receiver || "",
        createdAt: `${Date.now()}`,
        likes: [],
      };
      const response = await CreateCommentsService.createСomment(comment);
      return response;
    } catch (error: any) {
      console.log(error);
    }
  }

  async deletePost(id: any) {
    try {
      const response = await CreateCommentsService.deletePost(id);
      await console.log("+", response);
    } catch (error: any) {
      console.log(error);
    }
  }

  async reSavePost(user: any, data: any, postId: any) {
    try {
      const post = {
        text: String,
        AvatarPath: String,
        author: String,
        userId: String,
        postId: String,
        createdAt: { type: Date, default: Date.now },
        likes: [],
        replies: [],
      };
      const response = await CreateCommentsService.reSavePost(user.id, post);
      await console.log("+", response);
    } catch (error: any) {
      console.log(error);
    }
  }

  async updatePost(data: any) {
    try {
      const post = {
        text: String,
        AvatarPath: String,
        author: String,
        userId: String,
        postId: String,
        createdAt: { type: Date, default: Date.now },
        likes: [],
        replies: [],
      };
      const response = await CreateCommentsService.updatePost(
        data.postId,
        post
      );
      await console.log("+", response);
    } catch (error: any) {
      console.log(error);
    }
  }
}
