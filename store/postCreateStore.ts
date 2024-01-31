import { makeAutoObservable } from "mobx";
import sortIds from "../features/Sort/SortIds";
import CreatePostService from "../utils/createPost/CreatePostService";

export default class PostCreateStore {
  postId = "";
  category = "";
  save = false;
  data = [
    {
      type: "h1",
      value: "",
      stared: false,
      id: 0,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  saveHandler() {
    this.save = true;
  }

  deleteSaveHandler() {
    this.save = false;
  }

  setPostId(data: any) {
    this.postId = data;
    console.log(data);
  }

  changeCategory(id: any) {
    this.category = id;
    console.log(id);
  }

  addItem(data: any, id = this.data.length) {
    if (this.data.length === id + 1) {
      this.data.splice(id, 1, data);
    } else {
      this.data.splice(id + 1, 0, data);
    }
    console.log("data", this.data, data, id);
  }

  sortArray(data: any) {
    console.log(data);
    const result = sortIds(data);
    console.log(result);
    this.data = result;
    return result;
  }

  updateArray(data: any) {
    this.data = data;
  }

  updateItem(data: any) {
    let res = this.data;
    let foundIndex = res.findIndex((item: any) => item.id === data.id);
    this.data[foundIndex] = data;
  }

  MoveItem(data: any, move: any) {
    let res = this.data;
    let firstIndex = res.findIndex((item: any) => item.id === data.id) as any;
    let secondIndex;
    if (move === "up") {
      secondIndex = res.findIndex(
        (item: any) => item.id === data.id - 1
      ) as any;
    } else {
      secondIndex = res.findIndex(
        (item: any) => item.id === data.id + 1
      ) as any;
    }
    [res[firstIndex], res[secondIndex]] = [res[secondIndex], res[firstIndex]];
    const result = sortIds(res);
    this.data = result;
  }

  removeItem(data: any) {
    let res = this.data;
    let filterArr = res.filter((n: any) => n.id !== data.id);
    this.data = filterArr.map((n: any, index: any) => {
      return { ...n, id: index };
    });
  }

  getPost() {
    return this.data;
  }

  async createPost(user: any, data: any, postId: string) {
    try {
      const post = {
        user: user.id,
        category: this.category,
        published: true,
        publishedDate: `${Date.now()}`,
        postId: postId,
        data: data,
        stared: data.filter((item: any) => item.stared === true),
        tags: [],
        likes: [],
        comments: [],
        commentsCount: 0,
        views: [],
        viewsCount: 0,
      };
      const response = await CreatePostService.createPost(post);
      await console.log("+", response);
    } catch (error: any) {
      console.log(error);
    }
  }

  async deletePost(id: any) {
    try {
      const response = await CreatePostService.deletePost(id);
      await console.log("+", response);
    } catch (error: any) {
      console.log(error);
    }
  }

  async getPostId(id: any) {
    const response = await CreatePostService.getPost(id);
    await console.log("+", response);
  }

  async reSavePost(user: any, data: any, postId: any) {
    console.log(data);
    try {
      const post = {
        user: user.id,
        category: this.category,
        published: data.published || false,
        publishedDate: data.publishedDate,
        postId: postId,
        data: data,
        stared: data.filter((item: any) => item.stared === true),
        tags: [],
        likes: data.likes || [],
        comments: data.comments || [],
        commentsCount: data.commentsCount || 0,
        views: data.views || [],
        viewsCount: data.viewsCount || 0,
      };
      const response = await CreatePostService.reSavePost(post);
      await console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  }

  async updateData(user: any, data: any, postId: any, category: any) {
    console.log(data);
    try {
      const post = {
        user: user.id,
        postId: postId,
        category: category ? category : null,
        data: data,
      };
      const response = await CreatePostService.updateData(post);
      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  }

  async likePost(user: any, postId: any) {
    try {
      const response = await CreatePostService.addLike({
        user: user,
        postId: postId,
      });
      return response;
    } catch (error: any) {
      console.log(error);
    }
  }
}
