import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './UnAuthProfile.module.scss'
import Avatar from '../../../public/img/svg/Avatar'
import { Context } from '../../../pages/_app';

const UnAuthProfile = () => {

  const [showFixedMenu, setShowFixedMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const {popupHandlers} = useContext(Context);

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
      <div ref={menuRef} onClick={() => popupHandlers.authPopupOpen()} className={styles.unAuthProfile}>
        <Avatar />
      </div>
      {
        showFixedMenu &&
        <div className={styles.unAuthProfileFixed}>
          <div className={styles.unAuthProfile}>
            <Avatar />
          </div>
        </div>
      }
    </>
  );
};

export default UnAuthProfile;
