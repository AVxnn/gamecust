import React, {useEffect, useRef, useState} from 'react';
import styles from './UnAuthProfile.module.scss'
import Avatar from '../../../public/img/svg/Avatar'
import Notification from "../Notification";
import Trand from "../../../public/img/svg/Trand";
import Arrow from "../../../public/img/svg/Arrow";

const UnAuthProfile = () => {

  const [openMenu, setOpenMenu] = useState(true)
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

  return (
    <>
      <div ref={menuRef} className={styles.unAuthProfile}>
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
