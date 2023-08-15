import { makeAutoObservable } from "mobx";

export default class NotificationStore {
    store = [] as any;

    constructor() {
        makeAutoObservable(this)
    }
  
    async addItem(data : any) {
        this.store.push({
            title: data.title,
            status: data.status,
            timeLife: data.timeLife,
            id: this.store.length
        })
        
        setTimeout(() => {
            let res = this.store;
            let filterArr = res.filter((n: any) => n.id !== this.store.length - 1);
            this.store = filterArr.map((n: any, index: any) => {
                return { ...n, id: index };
            });
        }, data.timeLife)
        
    }

    deleteItem(data : any) {
        let res = this.store
        let filterArr = res.filter((n: any) => n.id !== data.id);
        this.store = filterArr.map((n: any, index: any)  => {
          return {...n, id: index}
        });
    }

    getStore() {
        return this.store
    }
}




