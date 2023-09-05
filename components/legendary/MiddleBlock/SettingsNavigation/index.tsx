import React, { useEffect, useState } from 'react'
import styles from "./SettingsNavigation.module.scss"
import Link from 'next/link'
import { useRouter } from 'next/router'
import Arrow from '../../../../public/img/svg/Arrow'
import User from '../../../../public/img/svg/User'
import Notification from '../../../../public/img/svg/Notification'
import Pacman from '../../../../public/img/svg/Pacman'
import Gift from '../../../../public/img/svg/Gift'

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
                    <Link onClick={() => setActive(0)} className={`${styles.item} ${active == 0 ? styles.active : ''}`} href={`/settings/profile`}>
                        <div className={styles.userMenu}>
                            <div className={`${styles.bgAvatar} ${styles.purple}`}>
                                <User />
                            </div>
                            <p className={styles.userName}>Профиль</p>
                            <div className={styles.arrow}>
                                <Arrow/>
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => setActive(1)} className={`${styles.item} ${active == 1 ? styles.active : ''}`} href={`/settings/main`}>
                        <div className={styles.userMenu}>
                            <div className={`${styles.bgAvatar} ${styles.green}`}>
                                <Pacman />
                            </div>
                            <p className={styles.userName}>Основные</p>
                            <div className={styles.arrow}>
                                <Arrow/>
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => setActive(2)} className={`${styles.item} ${active == 2 ? styles.active : ''}`} href={`/settings/notification`}>
                        <div className={styles.userMenu}>
                            <div className={`${styles.bgAvatar} ${styles.gray}`}>
                                <Notification type={false}/>
                            </div>
                            <p className={styles.userName}>Уведомления</p>
                            <div className={styles.arrow}>
                                <Arrow />
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => setActive(3)} className={`${styles.item} ${active == 3 ? styles.active : ''}`} href={`/settings/subscription`}>
                        <div className={styles.userMenu}>
                            <div className={`${styles.bgAvatar} ${styles.orange}`}>
                                <Gift />
                            </div>
                            <p className={styles.userName}>Подписка</p>
                            <div className={styles.arrow}>
                                <Arrow/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SettingsNavigation