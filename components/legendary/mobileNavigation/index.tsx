"use client"

import { usePathname } from 'next/navigation';
import styles from "./MobileNavigation.module.scss"
import React, { useEffect, useState } from 'react'
import Tabs from '../common/Tabs';

const MobileNavigation = () => {

    const [active, setActive] = useState(0);
    const pathname = usePathname() as any;
    const [dataTagAccount, setDataTagAccount] = useState([
      {
        title: "Рекомендации",
        link: "",
      },
      {
        title: "Свежее",
        link: "new",
      },
      {
        title: "Подписки",
        link: "subs",
      },
      {
        title: "Категории",
        link: "categories",
      },
    ]) as any;
  
    const changePage = (index: number) => {
      setActive(index);
    };
  
    useEffect(() => {
      switch (pathname.split("/")[1]) {
        case "":
          return setActive(0);
        case "new":
          return setActive(1);
        case "subs":
          return setActive(2);
        case "categories":
          return setActive(3);
        default:
          return setActive(0);
      }
    }, [pathname]);

  return (
    <div className={styles.cont}>
            <ul className={styles.navigation}>
              {dataTagAccount &&
                dataTagAccount.map((item: any, index: number) => {
                  return (
                    <Tabs
                      link={`/${item.link}`}
                      key={index}
                      onClick={() => changePage(index)}
                      current={active == index}
                    >
                      {item.title}
                    </Tabs>
                  );
                })}
            </ul>
          </div>
  )
}

export default MobileNavigation