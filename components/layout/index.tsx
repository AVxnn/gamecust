import React, { useContext } from 'react';
import styles from './layout.module.scss'
import Home from '../../public/img/svg/Home'
import PlusMenu from '../../public/img/svg/PlusMenu'
import Notification from '../../public/img/svg/Notification'
import Search from '../../public/img/svg/Search'
import Link from "next/link";
import Image from "next/image";
import AuthPopup from '../legendary/common/Popup/AuthPopup';
import { Context } from '../../pages/_app';
import Avatar from '../../public/img/svg/Avatar';
import { observer } from 'mobx-react-lite';

const Layout = ({children}: any) => {
  
  const {mobxStore} = useContext(Context);

  return (
    <>
      <AuthPopup />
      <div className={styles.layout}>
      <div className={styles.container}>
        {children}
      </div>
      <div className={styles.mobileMenu}>
        <Link className={styles.link} href={'/'}>
          <Home />
        </Link>
        <Link className={styles.link} href={'/'}>
          <Search />
        </Link>
        <Link className={styles.link} href={'/editor'}>
          <PlusMenu />
        </Link>
        <Link className={styles.link} href={'/'}>
          <Notification />
        </Link>
        {
          mobxStore?.user?.email ? (
            <Link className={styles.link} href={'/account'}>
              <div className={styles.avatar}>
                <Image layout={'fill'} src={''} alt="ads"/>
              </div>
            </Link>
          ) : (
            <Link className={styles.link} href={'/account'}>
              <div className={styles.avatar}>
                <Avatar />
              </div>
            </Link>
          )
        }
      </div>
    </div>
    </>
  );
};

export default observer(Layout);
