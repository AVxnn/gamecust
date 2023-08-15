import React, { useEffect, useState } from 'react'
import styles from "./SettingsNavigation.module.scss"
import Link from 'next/link'
import { useRouter } from 'next/router'

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

    const router = useRouter();

    const [active, setActive] = useState(null) as any;

    useEffect(() => {
        switch (router.asPath) {
            case '/settings/profile':
                setActive(0);
                break;
            case '/settings/main':
                setActive(1);
                break;
            case '/settings/notification':
                setActive(2);
                break;
            case '/settings/subscription':
                setActive(3);
                break;
            default:
                setActive(0);
                break;
        }
        
    }, [router]);

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