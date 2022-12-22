import React from 'react';
import styles from './header.module.scss'
import Logotype from '../../../public/img/svg/Logotype'
import Input from "../input";
import Notification from "../Notification";
import UserSection from "../UserSection";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftColumn}>
        <div className={styles.logotype}>
          <Logotype />
        </div>
      </div>
      <div className={styles.middleColumn}>
        <Input />
      </div>
      <div className={styles.rightColumn}>
        <Notification />
        <UserSection />
      </div>
    </div>
  );
};

export default Header;
