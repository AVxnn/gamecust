import React, { useEffect, useState } from "react";
import styles from "./navigationLayout.module.scss";
import { usePathname } from "next/navigation";
import NavigationItem from "../navigationItem";
import Fire from "../../../public/img/svg/Fire";
import Time from "../../../public/img/svg/Time";
import Chees from "../../../public/img/svg/Chees";
import Categories from "../../../public/img/svg/Categories";

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
      type: "path",
    },
    {
      title: "Свежее",
      link: "/new",
      icon: <Time />,
      type: "path",
    },
    {
      title: "Подписки",
      link: `/subs`,
      icon: <Chees />,
      type: "path",
    },
    {
      title: "Категории",
      link: `/categories`,
      icon: <Categories />,
      type: "rect",
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
            type={item.type}
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
