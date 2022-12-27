import React, {useState} from 'react';
import NotificationIcon from '../../../public/img/svg/Notification'
import styles from './Notification.module.scss'

const Notification = () => {

    const [openMenu, setOpenMenu] = useState(true)

    return (
    <>
        <div onClick={() => setOpenMenu(!openMenu)} className={styles.notification}>
            <NotificationIcon />
        </div>
        <div onMouseLeave={() => setOpenMenu(true)} className={`${styles.menu} ${openMenu && styles.menuItem}`}></div>
    </>
  );
};

export default Notification;
