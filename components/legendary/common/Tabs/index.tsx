import React, {useState} from 'react';
import styles from './Tabs.module.scss'
import Link from "next/link";

const Tabs = ({children, current, onClick} : any) => {

  return (
    <span
      onClick={onClick}
      className={`${styles.tab} ${current && styles.active}`}>
      <Link href={'#'}>
        {children}
      </Link>
    </span>
  );
};

export default Tabs;
