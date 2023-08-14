import React, { useContext } from 'react'
import Pen from "../../../../../public/img/svg/Pen"
import styles from "./PenCreate.module.scss"
import Link from 'next/link'
import { Context } from '../../../../../pages/_app'
import { useDispatch } from 'react-redux'
import {open} from '../../../../../features/Popup/PopupAuthSlice'
import { useRouter } from 'next/router'
import uuid from 'react-uuid'

const PenCreate = () => {

    const dispatch = useDispatch()

    const {mobxStore} = useContext(Context);
  
    const router = useRouter()
  
    const redirectLink = (link: string) => {
      if(!mobxStore.user.email) {
        return dispatch(open())
      }
      router.push(link)
    }

    return (
        <div onClick={() => redirectLink(`/editor/${mobxStore.user.id}/${uuid()}-${mobxStore.user.username}`)} className={styles.penCreate}>
            <Pen type={false}/>
        </div>
    )
}

export default PenCreate