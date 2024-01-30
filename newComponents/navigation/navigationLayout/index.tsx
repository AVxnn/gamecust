import React, { useEffect, useState } from "react";
import styles from "./navigationLayout.module.scss";
import { usePathname } from "next/navigation";
import NavigationItem from "../navigationItem";
import Fire from "../../../public/img/svg/Fire.js";
import Time from "../../../public/img/svg/Time.js";
import Chees from "../../../public/img/svg/Chees.js";
import Categories from "../../../public/img/svg/Categories.js";

const NavigationLayout = () => {
  const [active, setActive] = useState(0);
  const pathname = usePathname();

  const changePage = (index: number) => {
    setActive(index);
  };

  let data = [
    {
      title: "Рекомендовано",
      link: "/",
      icon: <Fire solid={true} />,
    },
    {
      title: "Свежее",
      link: "/new",
      icon: <Time />,
    },
    {
      title: "Подписки",
      link: `/subs`,
      icon: <Chees />,
    },
    {
      title: "Категории",
      link: `/categories`,
      icon: <Categories />,
    },
  ];

  useEffect(() => {
    switch (pathname) {
      case "/":
        setActive(0);
        break;
      case "/new":
        setActive(1);
        break;
      case `/subs`:
        setActive(2);
        break;
      case `/categories`:
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
};

export default NavigationLayout;
