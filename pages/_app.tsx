import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import {useEffect, createContext, useContext} from "react";
import MobxStore from '../store/mobxStore';
import PostCreateStore from '../store/postCreateStore';

interface State {
  mobxStore: MobxStore;
  postCreateStore: PostCreateStore;
}

const mobxStore = new MobxStore()
const postCreateStore = new PostCreateStore()

export const Context = createContext<State>({
  mobxStore,
  postCreateStore
})

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const Theme = localStorage.getItem('Theme')
    if (Theme == 'white') {
      document.body.setAttribute('dark', '');
    } else {
      document.body.removeAttribute('dark');
    }
  })

  return (
    <Provider store={store}>
      <Context.Provider value={{mobxStore, postCreateStore}}>
        <Component {...pageProps} />
      </Context.Provider>
    </ Provider>
  )
}
