import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import {useEffect, createContext, useContext} from "react";
import MobxStore from '../store/mobxStore';

interface State {
  mobxStore: MobxStore;
}

const mobxStore = new MobxStore()

export const Context = createContext<State>({
  mobxStore,
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
      <Context.Provider value={{mobxStore}}>
        <Component {...pageProps} />
      </Context.Provider>
    </ Provider>
  )
}
