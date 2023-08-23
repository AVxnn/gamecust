import React, {useState} from 'react';
import styles from './Tabs.module.scss'
import Link from "next/link";
import { useRouter } from 'next/router';

const Tabs = ({children, current, onClick, link} : any) => {

  const router = useRouter();

  const clickHandler = (e: any) => {
    e.preventDefault();
    if (link) {
      router.push(link)
    }
  }

  return (
    <span
      onClick={onClick}
      className={`${styles.tab} ${current && styles.active}`}>
      <Link href={link ? link : '#'} onClick={clickHandler}>
        {children}
      </Link>
    </span>
  );
};

export default Tabs;
