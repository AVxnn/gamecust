import React, { useContext, useState } from 'react';
import styles from './MainLayout.module.scss'
import { observer } from 'mobx-react';
import NotificationList from '../../legendary/common/NotificationList';
import MobileMenu from '../../legendary/common/MobileMenu';
import Navigation from '../../legendary/MiddleBlock/Navigation';
import UserLeft from '../../legendary/LeftBlock/UserLeft';
import CreatePostRight from '../../legendary/RightBlock/CreatePostRight';
import Premium from '../../legendary/RightBlock/Premium';
import TopUsers from '../../legendary/RightBlock/TopUsers';
import NewsSliderSmall from '../../legendary/RightBlock/NewsSliderSmall';
import TopGroup from '../../legendary/RightBlock/TopGroup';
import Contacts from '../../legendary/RightBlock/Contacts';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import LoginRight from '../../legendary/RightBlock/LoginRight';
import AuthPopup from '../../auth/authPopup';

const MainLayout = ({children}: any) => {

  const { scrollY } = useScroll()
  const [isfixed, setIsFixed] = useState(false)
  useMotionValueEvent(scrollY, "change", (latest: any) => {
    if (latest > 840) {
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }
  })
  
  return (
    <>
      <AuthPopup />
      <NotificationList />
      <div className={styles.layout}>
        <div className={styles.container}>
            <div className={styles.leftColumn}>
            <div className={styles.navigationLeft}>
                <UserLeft />
                <UserLeft />
            </div>
            </div>
            <div className={styles.middleColumn}>
            <Navigation />
            <div className={styles.postListContainer}>
                {children}
            </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={`${styles.containerRight} ${isfixed ? styles.fixed : ''}`}>
                <LoginRight />
                <Premium />
                <TopUsers />
                <NewsSliderSmall />
                <TopGroup />
                <Contacts />
              </div>
            </div>
        </div>
        <MobileMenu />
      </div>
    </>
  );
};

export default observer(MainLayout);
