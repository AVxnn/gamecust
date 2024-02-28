import { makeAutoObservable } from "mobx";

export default class NotificationStore {
  authPopup = false as boolean;

  constructor() {
    makeAutoObservable(this);
  }

  authPopupOpen() {
    this.authPopup = true;
    const body = document.body;
    body.classList.add("body-overflow-hidden");
  }

  authPopupClose() {
    this.authPopup = false;
    const body = document.body;
    body.classList.remove("body-overflow-hidden");
  }

  noWorkScroll() {
    const body = document.body;
  }

  workScroll() {
    const body = document.body;
  }
}
