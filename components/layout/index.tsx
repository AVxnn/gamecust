import React from 'react';
import styles from './layout.module.scss'

const Layout = ({children}: any) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

export default Layout;
