import { makeAutoObservable } from "mobx";
import sortIds from "../features/Sort/SortIds";
import CreatePostService from "../utils/createPost/CreatePostService";

export default class PostCreateStore {
  postId = "";
  category = "";
  save = false;
  title = "";
  data = [
    {
      type: "text",
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
  }

  addItem(data: any, id = this.data.length) {
    if (this.data.length === id) {
      this.data.splice(id, 1, data);
    } else {
      this.data.splice(id + 0.5, 0, data);
      this.sortArray(this.data);
    }
  }

  sortArray(data: any) {
    const result = sortIds(data);
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

  updateTitle(data: string) {
    this.title = data;
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

  async createPost(user: any, data: any, postId: string, title: string) {
    try {
      const post = {
        user: user.id,
        category: this.category,
        published: true,
        publishedDate: `${Date.now()}`,
        postId: postId,
        title: title,
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
    } catch (error: any) {
      console.log(error);
    }
  }

  async deletePost(id: any) {
    try {
      const response = await CreatePostService.deletePost(id);
    } catch (error: any) {
      console.log(error);
    }
  }

  async getPostId(id: any) {
    const response = await CreatePostService.getPost(id);
  }

  async reSavePost(user: any, data: any, postId: any) {
    try {
      const post = {
        user: user.id,
        category: this.category,
        published: data.published || false,
        publishedDate: data.publishedDate,
        postId: postId,
        title: data,
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
    } catch (error: any) {
      console.log(error);
    }
  }

  async updateData(user: any, data: any, postId: any, category: any, title: string) {
    try {
      const post = {
        user: user.id,
        postId: postId,
        category: category ? category : null,
        data: data,
        title: title
      };
      const response = await CreatePostService.updateData(post);
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
