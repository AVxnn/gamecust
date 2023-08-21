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

  useEffect(() => {
    
    const checkHandler = async () => {
      if(localStorage.getItem('token')) {
        console.log('checkUser');
        
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
      <Provider store={store}>
        <Context.Provider value={{mobxStore, postCreateStore, notificationStore, popupHandlers}}>
          <Component {...pageProps} />
        </Context.Provider>
    </ Provider>
    </>
    
  )
}
