import React, { useEffect, useState } from 'react'
import NavigationItem from '../../../newComponents/navigation/navigationItem';
import styles from "./leftMenu.module.scss"
import { usePathname } from 'next/navigation';
import Time from '../../../public/img/svg/Time';
import Chees from '../../../public/img/svg/Chees';
import CategoriesADMIN from '../../../public/img/svg/CategoriesADMIN';
import Categories from '../../../public/img/svg/Categories';

const LeftPanel = () => {
    const [active, setActive] = useState(0);
    const pathname = usePathname();
  
    const changePage = (index: number) => {
      setActive(index);
    };
  
    let data = [
      {
        title: "Посты",
        link: "/adminpanel/posts",
        icon: <CategoriesADMIN/>,
      },
      {
        title: "Пользователи",
        link: "/adminpanel/users",
        icon: <Time />,
      },
      {
        title: "Настройки",
        link: `/adminpanel/subs`,
        icon: <Chees />,
      },
      {
        title: "Промокоды",
        link: `/adminpanel/promocodes`,
        icon: <Categories />,
      },
    ];
  
    useEffect(() => {
      switch (pathname) {
        case "/adminpanel/posts":
          setActive(0);
          break;
        case "/adminpanel/users":
          setActive(1);
          break;
        case `/adminpanel/subs`:
          setActive(2);
          break;
        case `/adminpanel/promocodes`:
          setActive(3);
          break;
        default:
          setActive(0);
          break;
      }
    }, [pathname]);
  
    return (
      <ul className={styles.navigation}>
        {data.map((item: any, index: number) => {
          return (
            <NavigationItem
              key={index}
              link={item.link}
              onClick={() => changePage(index)}
              current={active == index}
              icon={item.icon}
              title={item.title}
            />
          );
        })}
      </ul>
    );
}

export default LeftPanel