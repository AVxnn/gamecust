import React, {useEffect, useRef, useState} from 'react';
import styles from './UserSection.module.scss'
import Arrow from '../../../public/img/svg/Arrow'
import Trand from '../../../public/img/svg/Trand'
import Notification from "../Notification";

const UserSection = () => {

  const [openMenu, setOpenMenu] = useState(true)
  const [notifi, setNotifi] = useState(false)
  const [showFixedMenu, setShowFixedMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const dropdownTypesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {

        if (menuRef.current && menuRef.current.getBoundingClientRect().top <= 0) {
          setShowFixedMenu(true)
        } else {
          setShowFixedMenu(false)
        }
      })
    }
  })

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
    setOpenMenu(true)
  }, [notifi])

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

  return (
    <>
      <Notification notifi={notifi} setNotifi={setNotifi} openMenus={openMenu}/>
      <div ref={menuRef}
           onMouseEnter={() => setOpenMenu(!openMenu)}
           className={styles.user}>
        <div className={styles.avatar}>
          <img src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
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
      <div
        ref={dropdownTypesRef}
        onMouseLeave={() => setOpenMenu(true)}
        className={`${styles.menu} ${openMenu && styles.menuItem}`}
      >

      </div>
      {
        showFixedMenu &&
        <div className={styles.userFixed}>
          <Notification notifi={notifi} setNotifi={setNotifi}  openMenus={openMenu} />
          <div
              onMouseEnter={() => setOpenMenu(!openMenu)}
              className={styles.user}>
            <div className={styles.avatar}>
              <img src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
            </div>
            <div className={styles.info}>
              <h4 className={styles.name}>MetaVxnn</h4>
              <span className={styles.subtitle}>
                <Trand />
                1232
              </span>
            </div>
            <div style={{transform: !openMenu ? 'rotate(180deg)' : ''}} className={styles.arrowDown}>
              <Arrow />
            </div>
          </div>
          <div
            onMouseLeave={() => setOpenMenu(true)}
            className={`${styles.menu} ${openMenu && styles.menuItem}`}
          >

          </div>
        </div>
      }
    </>
  );
};

export default UserSection;
