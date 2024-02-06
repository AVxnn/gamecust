"use client";

import React, { createContext, useEffect } from "react";
import MobxStore from "../../store/mobxStore";
import PostCreateStore from "../../store/postCreateStore";
import NotificationStore from "../../store/notificationStore";
import PopupHandlers from "../../store/popupHandlers";
import CommentsCreateStore from "../../store/commentsCreateStore";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import NextAuthProvider from "../../features/provider/nextAuthProvider";
import { observer } from "mobx-react-lite";
import Head from "next/head";

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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="yandex-verification" content="444594329f6f2654" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
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
