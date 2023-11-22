import React, { useContext } from 'react'
import Pen from "../../../../../public/img/svg/Pen"
import styles from "./PenCreate.module.scss"
import { Context } from '../../../../../pages/_app'
import { useRouter } from 'next/router'
import uuid from 'react-uuid'
import Plus from '../../../../../public/img/svg/Plus'

const PenCreate = () => {

    const {mobxStore, notificationStore, popupHandlers} = useContext(Context);
  
    const router = useRouter()
  
    const redirectLink = (link: string) => {
      if(!mobxStore.user.email) {
        notificationStore.addItem({title: 'Нужно выполнить авторизацию', status: 'error', timeLife: 2500})
        return popupHandlers.authPopupOpen()
      }
      router.push(link)
    }

    return (
        <div onClick={() => redirectLink(`/editor/${mobxStore.user.id}/${uuid()}-${mobxStore.user.username}`)} className={styles.penCreate}>
            <Plus />
            Создать
        </div>
    )
}

export default PenCreate