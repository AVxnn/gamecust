import React from 'react';
import styles from './layout.module.scss'
import User from '../../public/img/svg/User'
import Home from '../../public/img/svg/Home'
import Search from '../../public/img/svg/Search'
import Link from "next/link";
import Image from "next/image";

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
          <div className={styles.avatar}>
            <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
