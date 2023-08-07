import React, { useContext } from 'react'
import styles from "./ToolBar.module.scss"
import Button from '../../../common/Button'
import Dots from '../../../../../public/img/svg/Dots'
import Check from '../../../../../public/img/svg/Check'
import { Context } from '../../../../../pages/_app'

const ToolBar = () => {

  const {mobxStore, postCreateStore} = useContext(Context);

  const submitHandler = () => {
    if(localStorage.getItem('token')) {
      mobxStore.checkAuth()
    }
    postCreateStore.createPost(mobxStore.user, postCreateStore.getPost());
  }

  return (
    <div className={styles.toolBar}>
        <div className={styles.left}>
            <Button clb={submitHandler} type={'primary'} size={''}>Опубликовать</Button>
            <Dots />
        </div>
        <div className={styles.right}>
            <span className={styles.save}>Сохранено</span>
            <Check />
        </div>
    </div>
  )
}

export default ToolBar