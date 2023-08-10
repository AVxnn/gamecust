import React, { useState } from 'react'
import styles from "./SettingsNavigation.module.scss"
import Link from 'next/link'

const tags = [
    {
        name: 'Профиль',
        link: 'profile'
    },
    {
        name: 'Основные',
        link: 'main'
    },
    {
        name: 'Уведомления',
        link: 'notification'
    },
    {
        name: 'Подписка',
        link: 'subscription'
    },
]

const SettingsNavigation = () => {

    const [active, setActive] = useState(0);

  return (
    <>
        <div className={styles.navigation}>
            <h3 className={styles.title}>Настройки</h3>
            <div className={styles.list}>
                {
                    tags.map((item : any, index : number) => (
                        <>
                        <Link onClick={() => setActive(index)} className={`${styles.item} ${active === index ? styles.active : ''}`} href={`/settings/${item.link}`}>
                            {item.name}
                        </Link>
                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default SettingsNavigation