import React from 'react'
import Link from "next/link";
import styles from "./LinkUpload.module.scss"

const LinkUpload = ({changeValue, item} : any) => {
  return (
        <div className={styles.container}>
            <input onChange={(e) => changeValue(e.currentTarget.value)} className={styles.link} type="text" placeholder='Вставь ссылку на картинку или видео' />
        </div>
    )
}

export default LinkUpload;
