import React, { useContext } from 'react';
import styles from './layout.module.scss'

import { observer } from 'mobx-react-lite';
import MobileMenu from '../legendary/common/MobileMenu';
import NotificationList from '../legendary/common/NotificationList';
import AuthPopup from '../auth/authPopup';

const Layout = ({children}: any) => {
  
  return (
    <>
      <AuthPopup />
      <NotificationList />
      <div className={styles.layout}>
        <div className={styles.container}>
          {children}
        </div>
        <MobileMenu />
      </div>
    </>
  );
};

export default observer(Layout);
