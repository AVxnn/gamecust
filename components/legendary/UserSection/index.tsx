import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './UserSection.module.scss'
import Arrow from '../../../public/img/svg/Arrow'
import Trand from '../../../public/img/svg/Trand'
import Notification from "../Notification";
import Image from 'next/image'
import Link from "next/link";
import Cog from "../../../public/img/svg/Cog";
import Exit from "../../../public/img/svg/Exit";
import Sun from "../../../public/img/svg/Sun";
import Moon from "../../../public/img/svg/Moon";
import { Context } from '../../../pages/_app';

const UserSection = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const [theme, setTheme] = useState(true)
  const [notifi, setNotifi] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);

  const {mobxStore} = useContext(Context);

  const dropdownTypesRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (openMenu) {
      if (dropdownTypesRef.current &&
        !dropdownTypesRef.current.contains(e.target) &&
        !menuRef.current?.contains(e.target)) {
        setOpenMenu(true)
      }
    }
  }

  useEffect(() => {
    if (typeof document !== "undefined" && openMenu) {
      document.addEventListener('click', (e: any) => {
        handleClickOutside(e);
      })
      return document.removeEventListener('click', (e: any) => {
        handleClickOutside(e);
      })
    }
  })

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
    <>
      <Notification notifi={notifi} setNotifi={setNotifi} openMenus={openMenu}/>
      <div ref={menuRef}
           onMouseEnter={() => setOpenMenu(!openMenu)}
           className={styles.user}>
        <div className={styles.avatar}>
          <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
        </div>
        <div className={styles.info}>
          <h4 className={styles.name}>MetaVxnn</h4>
          <span className={styles.subtitle}>
            <Trand />
            1232
          </span>
        </div>
        <div style={{transform: !openMenu ? 'rotate(180deg)' : 'rotate(0deg)'}} className={styles.arrowDown}>
          <Arrow />
        </div>
      </div>
      {
        openMenu && (
          <div
            ref={dropdownTypesRef}
            onMouseLeave={() => setOpenMenu(false)}
            className={styles.menu}>
            <h4 className={styles.title}>Мой профиль</h4>
            <Link href={'#'}>
              <div className={styles.userMenu}>
                <div className={styles.avatar}>
                  <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
                </div>
                <p className={styles.userName}>MetaVxnn</p>
              </div>
            </Link>
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
    </>
  );
};

export default UserSection;
