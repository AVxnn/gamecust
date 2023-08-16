import React from 'react'
import styles from "./ProfileBlock.module.scss"
import Arrow from '../../../../public/img/svg/Arrow'

const ProfileBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Arrow/>
      </div>
      <div className={styles.mainBlocks}>
        <p>Отображаемое имя</p>
        <input type="text" placeholder='Введите ваше имя'/>
      </div>
    </div>
  )
}

export default ProfileBlock