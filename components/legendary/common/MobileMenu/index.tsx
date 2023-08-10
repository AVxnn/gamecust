import React, { useContext } from 'react'
import Home from '../../../../public/img/svg/Home'
import PlusMenu from '../../../../public/img/svg/PlusMenu'
import Notification from '../../../../public/img/svg/Notification'
import Search from '../../../../public/img/svg/Search'
import styles from "./MobileMenu.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Context } from '../../../../pages/_app'
import Avatar from '../../../../public/img/svg/Avatar'

const MobileMenu = () => {

    const {mobxStore} = useContext(Context);

    return (
        <>
            <div className={styles.mobileMenu}>
                <Link className={styles.link} href={'/'}>
                <Home />
                </Link>
                <Link className={styles.link} href={'/'}>
                <Search />
                </Link>
                <Link className={styles.link} href={'/editor'}>
                <PlusMenu />
                </Link>
                <Link className={styles.link} href={'/'}>
                <Notification />
                </Link>
                {
                mobxStore?.user?.email ? (
                    <Link className={styles.link} href={'/account'}>
                    <div className={styles.avatar}>
                        <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
                    </div>
                    </Link>
                ) : (
                    <Link className={styles.link} href={'/account'}>
                    <div className={styles.avatar}>
                        <Avatar />
                    </div>
                    </Link>
                )
                }
            </div>
        </>
    )
}

export default MobileMenu