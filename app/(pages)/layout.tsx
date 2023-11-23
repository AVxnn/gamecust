"use client";

import React, { createContext, useEffect } from "react";
import styles from "./layout.module.scss";
import { useSession } from "next-auth/react";
import MobxStore from "../../store/mobxStore";
import PostCreateStore from "../../store/postCreateStore";
import NotificationStore from "../../store/notificationStore";
import PopupHandlers from "../../store/popupHandlers";
import CommentsCreateStore from "../../store/commentsCreateStore";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import NextAuthProvider from "../../features/provider/nextAuthProvider";
import { observer } from "mobx-react-lite";

interface State {
  mobxStore: MobxStore;
  postCreateStore: PostCreateStore;
  notificationStore: NotificationStore;
  popupHandlers: PopupHandlers;
  commentsCreateStore: CommentsCreateStore;
}
const mobxStore = new MobxStore();
const postCreateStore = new PostCreateStore();
const notificationStore = new NotificationStore();
const popupHandlers = new PopupHandlers();
const commentsCreateStore = new CommentsCreateStore();

export const Context = createContext<State>({
  mobxStore,
  postCreateStore,
  notificationStore,
  popupHandlers,
  commentsCreateStore,
});

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const Theme = localStorage.getItem("Theme");
    if (Theme == "dark") {
      document.body.setAttribute("dark", "");
    } else {
      document.body.removeAttribute("dark");
    }

    const color = localStorage.getItem("color");
    if (color == "red") {
      document.body.setAttribute("red", "");
    } else if (color == "pink") {
      document.body.setAttribute("pink", "");
    } else if (color == "blue") {
      document.body.setAttribute("blue", "");
    } else if (color == "green") {
      document.body.setAttribute("green", "");
    } else {
      document.body.setAttribute("gamecust", "");
    }
  });

  useEffect(() => {
    const checkHandler = async () => {
      if (localStorage.getItem("token")) {
        await mobxStore.checkAuth();
      }
    };

    checkHandler();
  }, []);

  return (
    <>
      <Provider store={store}>
        <NextAuthProvider>
          <Context.Provider
            value={{
              mobxStore,
              postCreateStore,
              notificationStore,
              popupHandlers,
              commentsCreateStore,
            }}
          >
            {children}
          </Context.Provider>
        </NextAuthProvider>
      </Provider>
    </>
  );
};

export default observer(LayoutPages);
