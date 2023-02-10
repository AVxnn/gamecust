import React, {useEffect, useRef, useState} from 'react';
import styles from './header.module.scss'
import Input from "../input";
import UserSection from "../UserSection";
import Logotype from "../common/Logotype";
import UnAuthProfile from "../UnAuthProfile";
import Button from "../common/Button";

const Header = () => {



  const [auth, setAuth] = useState(true)
  const [showFixedMenu, setShowFixedMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {

        if (menuRef.current && menuRef.current.getBoundingClientRect().top <= 4) {
          setShowFixedMenu(true)
        } else {
          setShowFixedMenu(false)
        }
      })
    }
  })

  return (
    <div className={styles.header}>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <Logotype />
        </div>
        <div className={styles.middleColumn}>
          <Input placeholder={'Поиск'} width={300}/>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.profile}>
            {
              auth ? (
                <UserSection />
              ) : (
                <UnAuthProfile />
              )
            }
          </div>
          <div ref={menuRef} className={styles.create}>
            <Button type={'primary'}>Создать</Button>
          </div>
          { showFixedMenu &&
            <div className={styles.createFixed}>
              <Button type={'primary'}>Создать</Button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
