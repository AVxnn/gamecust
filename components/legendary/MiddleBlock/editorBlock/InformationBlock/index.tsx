import React from 'react'
import styles from "./InformationBlock.module.scss"
import Star from '../../../../../public/img/svg/Star';

const InformationBlock = ({item} : any) => {

  return (
    <div className={styles.container}>
        {
            item.stared && (
                <div className={styles.infoBlock}>
                    <Star />
                </div>
            )
        }
    </div>
  )
}

export default InformationBlock;