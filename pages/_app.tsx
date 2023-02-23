import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import {useEffect} from "react";

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
      <Component {...pageProps} />
    </ Provider>
  )
}
