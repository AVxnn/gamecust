import React, {useEffect, useRef, useState} from 'react';
import styles from './UserSection.module.scss'
import Arrow from '../../../public/img/svg/Arrow'
import Trand from '../../../public/img/svg/Trand'
import Tabs from "../common/Tabs";
import Notification from "../Notification";

const UserSection = () => {

  const [showFixedMenu, setShowFixedMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <Notification />
      <div ref={menuRef} className={styles.user}>
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
        <div className={styles.arrowDown}>
          <Arrow />
        </div>
      </div>
      {
        showFixedMenu &&
        <div className={styles.userFixed}>
          <Notification />
          <div className={styles.user}>
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
            <div className={styles.arrowDown}>
              <Arrow />
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default UserSection;
