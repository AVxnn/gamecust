import React from 'react'
import styles from "./ItemCommunities.module.scss"
import Link from "next/link"
import Home from '../../../../../../../../public/img/svg/Home'
import Edit from '../../../../../../../../public/img/svg/Edit'
import Trash from '../../../../../../../../public/img/svg/Trash'
import Analitics from '../../../../../../../../public/img/svg/Analitics'

const ItemCommunities = () => {
  return (
    <div className={styles.itemCommunication}>
      <div className={styles.topInfo}>
        <div className={styles.avatar}></div>
        <p className={styles.name}>Крутые перцы</p>
      </div>
      <div className={styles.bottomInfo}>
        <Link href="#">
          <div className={styles.itemBlock}> 
            <Home/>
          </div>
        </Link>
        <Link href="#">
          <div className={styles.itemBlock}> 
            <Edit/>
          </div>
        </Link>
        <Link href="#">
          <div className={`${styles.itemBlock} ${styles.inactive}`}> 
            <Analitics/>
          </div>
        </Link>
        <Link href="#">
          <div className={styles.itemBlock}> 
            <Trash/>
          </div>
        </Link>
      </div>
      <div className={styles.circle}></div>
    </div>
  )
}

export default ItemCommunities