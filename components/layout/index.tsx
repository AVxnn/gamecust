import React, { useContext } from 'react';
import styles from './layout.module.scss'

import AuthPopup from '../legendary/common/Popup/AuthPopup';
import { observer } from 'mobx-react-lite';
import MobileMenu from '../legendary/common/MobileMenu';

const Layout = ({children}: any) => {
  
  return (
    <>
      <AuthPopup />
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
