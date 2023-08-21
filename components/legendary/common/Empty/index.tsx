import React from 'react'
import styles from "./Empty.module.scss"

const Empty = ({text, subtext = ''} : any) => {
  return (
    <div className={styles.empty}>
        <h4>{text}</h4>
        <p>{subtext}</p>
    </div>
  )
}

export default Empty