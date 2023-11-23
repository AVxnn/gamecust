import React from 'react'
import styles from "./header.module.scss"
import Logotype from '../../components/legendary/common/Logotype'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <Logotype />
        </div>
        <div className={styles.middleColumn}>

        </div>
        <div className={styles.rightColumn}>

        </div>
      </div>
    </div>
  )
}

export default Header