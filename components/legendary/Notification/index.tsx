import React from 'react';
import NotificationIcon from '../../../public/img/svg/Notification'
import styles from './Notification.module.scss'

const Notification = () => {
  return (
    <div className={styles.notification}>
      <NotificationIcon />
    </div>
  );
};

export default Notification;
