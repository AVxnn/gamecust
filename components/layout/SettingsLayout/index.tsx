import React from 'react';
import styles from './SettingsLayout.module.scss'
import { observer } from 'mobx-react';
import SettingsNavigation from '../../legendary/MiddleBlock/SettingsNavigation';
import NotificationList from '../../legendary/common/NotificationList';
import AuthPopup from '../../legendary/common/Popup/AuthPopup';
import MobileMenu from '../../legendary/common/MobileMenu';

const SettingsLayout = ({children}: any) => {
  return (
    <>
        <AuthPopup />
        <NotificationList />
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                </div>
                <div className={styles.middleColumn}>
                    {children}
                </div>
                <div className={styles.rightColumn}>
                    <SettingsNavigation />
                </div>
            </div>
            <MobileMenu />
        </div>
    </>
  );
};

export default observer(SettingsLayout);
