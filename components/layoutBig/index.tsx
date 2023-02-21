import React from 'react';
import styles from './layoutBig.module.scss'
import User from '../../public/img/svg/User'
import Home from '../../public/img/svg/Home'
import Search from '../../public/img/svg/Search'
import Link from "next/link";

const LayoutBig = ({children}: any) => {
  return (
    <div className={styles.layoutBig}>
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

export default LayoutBig;
