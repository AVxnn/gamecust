import { makeAutoObservable } from "mobx";
import sortIds from "../features/Sort/SortIds";
import CreatePostService from "../utils/createPost/CreatePostService";

export default class PostCreateStore {
    data = [
        {
            type: 'h1',
            value: '',
            stared: false,
            id: 0,
        },
    ];

    constructor() {
        makeAutoObservable(this)
    }

    addItem(data : any) {
        this.data.push(data);
        console.log(this.data);
    }

    sortArray(data : any) {
        const result = sortIds(this.data)
        this.data = result;
    }

    updateArray(data : any) {
        this.data = data
    }
      
    updateItem(data : any) {
        let res = this.data
        let foundIndex = res.findIndex((item : any) => item.id === data.id);
        this.data[foundIndex] = data;
    }

    MoveItem(data : any, move: any) {
        let res = this.data
        let firstIndex = res.findIndex((item : any) => item.id === data.id) as any;
        let secondIndex
        if (move === 'up') {
            secondIndex = res.findIndex((item : any) => item.id === data.id - 1) as any;
        } else {
            secondIndex = res.findIndex((item : any) => item.id === data.id + 1) as any;
        }
        [res[firstIndex], res[secondIndex]] = [res[secondIndex], res[firstIndex]];
        const result = sortIds(res)
        this.data = result
    }
  
    removeItem(data : any) {
        let res = this.data
        let filterArr = res.filter((n: any) => n.id !== data.id);
        this.data = filterArr.map((n: any, index: any)  => {
          return {...n, id: index}
        });
    }

    getPost() {
        return this.data
    }

    async createPost(user: any, data: any) {
        try {
            const post = {
                title: 'user',
                description: 'desc',
                username: user.username,
                userAvatar: '',
                data: data,
                stared: data.filter((item:any) => item.stared === true),
                tags: [],
                images: [],
                hashtags: [],
                likes: [],
                comments: [],
                viewsCount: 0,
            }
            const response = await CreatePostService.createPost(post);
            await console.log('+', response);
        } catch (error: any) {
            console.log(error)
        }
    }

    async getPostId(id: any) {
        const response = await CreatePostService.getPost(id);
        await console.log('+', response);
        
    }

}