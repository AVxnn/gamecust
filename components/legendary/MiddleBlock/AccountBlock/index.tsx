import Link from 'next/link'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import styles from './AccountBlock.module.scss'
import { Context } from '../../../../pages/_app'
import Sun from '../../../../public/img/svg/Sun'
import Moon from '../../../../public/img/svg/Moon'
import Arrow from '../../../../public/img/svg/Arrow'
import Exit from '../../../../public/img/svg/Exit'
import Cog from '../../../../public/img/svg/Cog'
import Avatar from '../../../../public/img/svg/Avatar'
import { useDispatch } from 'react-redux'
import { open } from '../../../../features/Popup/PopupAuthSlice'
import { observer } from 'mobx-react-lite'

const AccountBlock = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [theme, setTheme] = useState(true)
    const dispatch = useDispatch()

    const {mobxStore} = useContext(Context);

    useEffect(() => {
        setTheme(localStorage.getItem('Theme') !== 'dark')
        console.log(theme)
      })

    function changeTheme() {
        const Theme = localStorage.getItem('Theme')
        if (Theme == 'white') {
            localStorage.setItem('Theme', 'dark');
            setTheme(false)
        } else {
            localStorage.setItem('Theme', 'white');
            setTheme(true)
        }
        setOpenMenu(false)
    }

  return (
    <div className={styles.menu}>
        {
            mobxStore?.user?.email ? (
                <>
                    <h4 className={styles.title}>Мой профиль</h4>
                    <Link href={'/profile/metavxnn'}>
                        <div className={styles.userMenu}>
                        <div className={styles.avatar}>
                            <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
                        </div>
                        <p className={styles.userName}>MetaVxnn</p>
                        </div>
                    </Link>
                </>
            ) : (
                <div onClick={() => dispatch(open())}>
                    <div className={styles.userMenu}>
                    <div className={styles.avatar}>
                        <Avatar />
                    </div>
                    <p className={styles.userName}>Вход и регистрация</p>
                    </div>
                </div>
            )
        }
        <Link href={'#'}>
            <div className={styles.userMenu}>
            <div className={styles.bgAvatar}>
                <Cog/>
            </div>
            <p className={styles.userName}>Настройки</p>
            </div>
        </Link>
        <Link onClick={() => changeTheme()} href={'#'}>
            <div className={styles.userMenu}>
            <div className={styles.bgAvatar}>
                {
                theme ? (
                    <Sun/>
                ) : (
                    <Moon/>
                )
                }
            </div>
            <p className={styles.userName}>Изменить тему</p>
            <div className={styles.arrow}>
                <Arrow/>
            </div>
            </div>
        </Link>
        <Link href={'#'}>
            <div className={styles.userMenu}>
            <div className={styles.bgAvatar}>
                <Exit/>
            </div>
            <p onClick={() => mobxStore.logout()}className={styles.userName}>Выйти</p>
            </div>
        </Link>
    </div>
  )
}

export default observer(AccountBlock)