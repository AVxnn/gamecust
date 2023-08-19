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
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import {open} from '../../../../features/Popup/PopupAuthSlice'
import uuid from 'react-uuid'
import { observer } from 'mobx-react'

const MobileMenu = () => {

    const dispatch = useDispatch()

    const {mobxStore} = useContext(Context);
  
    const router = useRouter()

    const redirectLink = (link: string) => {
        if(!mobxStore.user.email) {
          return dispatch(open())
        }
        router.push(link)
    }

    return (
        <>
            <div className={styles.mobileMenu}>
                <Link className={styles.link} href={'/'}>
                    <Home />
                </Link>
                <Link className={styles.link} href={'/'}>
                    <Search />
                </Link>
                <Link onClick={() => redirectLink(`/editor/${mobxStore?.user?.id}/${uuid()}-${mobxStore.user.username}`)} className={styles.link} href={`/editor/${mobxStore?.user?.id}/${uuid()}-${mobxStore?.user?.username}`}>
                    <PlusMenu />
                </Link>
                <Link className={styles.link} href={'/'}>
                    <Notification />
                </Link>
                {
                mobxStore?.user?.email ? (
                    <Link className={styles.link} href={'/account'}>
                    <div className={styles.avatar}>
                        <Image layout={'fill'} src={`${process.env.NEXT_PUBLIC_AVATARS_URL}${mobxStore.user.avatarPath}`} alt="ads"/>
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

export default observer(MobileMenu)