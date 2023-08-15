import { makeAutoObservable } from "mobx";

export default class NotificationStore {
    authPopup = false as boolean;

    constructor() {
        makeAutoObservable(this)
    }
  
    authPopupOpen() {
        this.authPopup = true
    }

    authPopupClose() {
        this.authPopup = false
        
    }

}




