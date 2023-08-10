import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './UserSection.module.scss'
import Arrow from '../../../public/img/svg/Arrow'
import Edit from '../../../public/img/svg/Edit'
import Notification from "../Notification";
import Image from 'next/image'
import Link from "next/link";
import Cog from "../../../public/img/svg/Cog";
import Exit from "../../../public/img/svg/Exit";
import Sun from "../../../public/img/svg/Sun";
import Moon from "../../../public/img/svg/Moon";
import { Context } from '../../../pages/_app';
import changeTheme from '../../../features/ChangeTheme';

const UserSection = () => {

  const [isDropOpen, setIsDropOpen] = useState(false)
  const [theme, setTheme] = useState('')
  const [notifi, setNotifi] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);

  const {mobxStore} = useContext(Context);

    const Button = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (Button.current) {
            Button.current.addEventListener("mouseenter", () => setIsDropOpen(true));
            Button.current.addEventListener("mouseleave", () => setIsDropOpen(false));
            }
        
            return () => {
            if (Button.current) {
                Button.current.removeEventListener("mouseenter", () => setIsDropOpen(true));
                Button.current.removeEventListener("mouseleave", () => setIsDropOpen(false));
            }
        };
    })

  const changeThemeHandler = () => {
    changeTheme()
    setTheme(localStorage.getItem('Theme') as any)
  }

  return (
    <>
      <Notification notifi={notifi} setNotifi={setNotifi} openMenus={isDropOpen}/>
      <div ref={Button} className={`${styles.container} ${isDropOpen ? styles.active : ''}`}>
        <Link href={`/profile/${mobxStore.user.username}`}>
          <div className={`${styles.user} ${isDropOpen ? styles.active : ''}`}>
            <div className={styles.avatar}>
              <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
            </div>
            <div className={styles.info}>
              <h4 className={styles.name}>{mobxStore.user.username}</h4>
              <span className={styles.subtitle}>
                Ур. 2
              </span>
            </div>
            <div style={{transform: !isDropOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} className={styles.arrowDown}>
              <Arrow />
            </div>
          </div>
        </Link>
        {
          isDropOpen && (
            <div className={styles.menu}>
              <h4 className={styles.title}>Моя информация</h4>
              <Link href={`/profile/${mobxStore.user.username}`}>
                <div className={styles.userMenu}>
                  <div className={styles.avatar}>
                    <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
                  </div>
                  <p className={styles.userName}>Мой профиль</p>
                </div>
              </Link>
              <Link href={`/profile/${mobxStore.user.username}/drafts`}>
                <div className={styles.userMenu}>
                  <div className={styles.bgAvatar}>
                    <Edit/>
                  </div>
                  <p className={styles.userName}>Черновики</p>
                </div>
              </Link>
              <Link href={'/settings/main'}>
                <div className={styles.userMenu}>
                  <div className={styles.bgAvatar}>
                    <Cog/>
                  </div>
                  <p className={styles.userName}>Настройки</p>
                </div>
              </Link>
              <Link onClick={() => changeThemeHandler()} href={'#'}>
                <div className={styles.userMenu}>
                  <div className={styles.bgAvatar}>
                    {
                      theme === "white" ? (
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
                <div className={`${styles.userMenu} ${styles.exit}`}>
                  <div className={styles.bgAvatar}>
                    <Exit/>
                  </div>
                  <p onClick={() => mobxStore.logout()}className={styles.userName}>Выйти</p>
                </div>
              </Link>
            </div>
          )
        }
      </div>
    </>
  );
};

export default UserSection;
