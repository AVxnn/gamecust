import React, {useEffect, useRef, useState} from 'react';
import NotificationIcon from '../../../public/img/svg/Notification'
import styles from './Notification.module.scss'

const Notification = ({openMenus, setNotifi} : any) => {

    const [openMenu, setOpenMenu] = useState(true)

    const dropdownTypesRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

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
    }, [openMenus])

    useEffect(() => {
        setNotifi(openMenu)
    }, [openMenu, setNotifi])

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
        <div ref={menuRef} onMouseEnter={() => setOpenMenu(!openMenu)} className={styles.notification}>
            <NotificationIcon />
        </div>
        <div ref={dropdownTypesRef} onMouseLeave={() => setOpenMenu(true)} className={`${styles.menu} ${openMenu && styles.menuItem}`}></div>
    </>
  );
};

export default Notification;
