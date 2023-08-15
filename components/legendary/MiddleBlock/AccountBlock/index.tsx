import Link from 'next/link'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import styles from './AccountBlock.module.scss'
import { Context } from '../../../../pages/_app'
import Sun from '../../../../public/img/svg/Sun'
import Moon from '../../../../public/img/svg/Moon'
import Arrow from '../../../../public/img/svg/Arrow'
import Exit from '../../../../public/img/svg/Exit'
import Mark from '../../../../public/img/svg/Mark'
import Avatar from '../../../../public/img/svg/Avatar'
import { useDispatch } from 'react-redux'
import { open } from '../../../../features/Popup/PopupAuthSlice'
import { observer } from 'mobx-react-lite'
import Cog from '../../../../public/img/svg/Cog'
import Pen from '../../../../public/img/svg/Pen'

const AccountBlock = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [theme, setTheme] = useState(true)

    const {mobxStore, popupHandlers} = useContext(Context);

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
        <div className={styles.lists}>
        <h4 className={styles.title}>Аккаунт</h4>
        {
            mobxStore?.user?.email ? (
                <>
                    <Link href={`/profile/${mobxStore.user.username}`} className={`${styles.block} ${styles.mrBottom}`}>
                        <div className={styles.userMenu}>
                            <div className={`${styles.avatar}`}>
                                <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
                            </div>
                            <p className={styles.userName}>MetaVxnn</p>
                            <div className={styles.arrow}>
                                <Arrow/>
                            </div>
                        </div>
                    </Link>
                </>
            ) : (
                <div className={`${styles.block} ${styles.mrBottom}`} onClick={() => popupHandlers.authPopupOpen()}>
                    <div className={styles.userMenu}>
                    <div className={styles.avatar}>
                        <Avatar />
                    </div>
                    <p className={styles.userName}>Войдите в аккаунт</p>
                    <div className={styles.arrow}>
                        <Arrow/>
                    </div>
                    </div>
                </div>
            )
        }
            {
                mobxStore?.user?.email && (
                    <div className={`${styles.block} ${styles.mrBottom}`}>
                        <Link href={'#'}>
                            <div className={styles.userMenu}>
                            <div className={`${styles.bgAvatar} ${styles.blue}`}>
                                <Mark type={true}/>
                            </div>
                            <p className={styles.userName}>Заметки (скоро)</p>
                            <div className={styles.arrow}>
                                <Arrow/>
                            </div>
                            </div>
                        </Link>
                        <Link href={`/profile/${mobxStore.user.username}/drafts`}>
                            <div className={styles.userMenu}>
                            <div className={`${styles.bgAvatar} ${styles.orange}`}>
                                <Pen type={true}/>
                            </div>
                            <p className={styles.userName}>Черновики</p>
                            <div className={styles.arrow}>
                                <Arrow/>
                            </div>
                            </div>
                        </Link>
                    </div>
                )
            }
            <Link className={`${styles.block} ${styles.mrBottom}`} onClick={() => changeTheme()} href={'#'}>
                <div className={styles.userMenu}>
                <div className={`${styles.bgAvatar} ${styles.purple}`}>
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
            {
                mobxStore?.user?.email && (
                    <Link className={styles.block} href={'/settings/main'}>
                        <div className={styles.userMenu}>
                        <div className={`${styles.bgAvatar} ${styles.green}`}>
                            <Cog />
                        </div>
                        <p className={styles.userName}>Настройки</p>
                        <div className={styles.arrow}>
                            <Arrow/>
                        </div>
                        </div>
                    </Link>
                )
            }
        </div>
        {
            mobxStore?.user?.email && (
                <Link onClick={() => mobxStore.logout()} className={styles.block} href={'#'}>
                    <div className={styles.userMenu}>
                    <div className={`${styles.bgAvatar} ${styles.gray}`}>
                        <Exit/>
                    </div>
                    <p className={styles.userName}>Выйти</p>
                    <div className={styles.arrow}>
                        <Arrow/>
                    </div>
                    </div>
                </Link>
            )
        }
    </div>
  )
}

export default observer(AccountBlock)