import React from 'react'
import styles from "./PremiumBlock.module.scss"
import Link from 'next/link'

const PremiumBlock = () => {
  return (
    <div className={styles.premium}>
        <h4 className={styles.title}>Подписка GameCust Plus</h4>
        <p className={styles.status}>Не активна</p>
        <Link className={styles.link} href={'/gamecustplus'}>Купить подписку</Link>
    </div>
  )
}

export default PremiumBlock