import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import {useEffect, createContext} from "react";
import MobxStore from '../store/mobxStore';
import PostCreateStore from '../store/postCreateStore';
import NotificationStore from '../store/notificationStore';
import PopupHandlers from '../store/popupHandlers'
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
interface State {
  mobxStore: MobxStore;
  postCreateStore: PostCreateStore;
  notificationStore: NotificationStore;
  popupHandlers: PopupHandlers;
}
const mobxStore = new MobxStore()
const postCreateStore = new PostCreateStore()
const notificationStore = new NotificationStore()
const popupHandlers = new PopupHandlers()

export const Context = createContext<State>({
  mobxStore,
  postCreateStore,
  notificationStore,
  popupHandlers
})

export default function App({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  useEffect(() => {
    const checkHandler = async () => {
      if(localStorage.getItem('token')) {
        await mobxStore.checkAuth()
      }
    }
    checkHandler()
    const Theme = localStorage.getItem('Theme')
    if (Theme == 'white') {
      document.body.setAttribute('dark', '');
    } else {
      document.body.removeAttribute('dark');
    }
  })

  return (
    <>
    <Head>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
    </Head>
      <Provider store={store}>
        <Context.Provider value={{mobxStore, postCreateStore, notificationStore, popupHandlers}}>
          <Component {...pageProps} />
        </Context.Provider>
      </ Provider>
    </>
  )
}
