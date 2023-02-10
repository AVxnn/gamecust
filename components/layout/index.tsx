import React from 'react';
import styles from './layout.module.scss'
import User from '../../public/img/svg/User'
import Home from '../../public/img/svg/Home'
import Search from '../../public/img/svg/Search'
import Link from "next/link";

const Layout = ({children}: any) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {children}
      </div>
      <div className={styles.mobileMenu}>
        <Link className={styles.link} href={''}>
          <Search />
        </Link>
        <Link className={styles.link} href={'/'}>
          <Home />
        </Link>
        <Link className={styles.link} href={'/profile/metavxnn'}>
          <User />
        </Link>
      </div>
    </div>
  );
};

export default Layout;
