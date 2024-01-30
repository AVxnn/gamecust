"use client";

import React, { useEffect, useState } from "react";
import styles from "./layout.module.scss";
import { observer } from "mobx-react-lite";
import NavigationLayout from "../../../../newComponents/navigation/navigationLayout";
import CreateButton from "../../../../newComponents/createButton";
import Premium from "../../../../components/legendary/RightBlock/Premium";
import Contacts from "../../../../components/legendary/RightBlock/Contacts";
import TopUsers from "../../../../components/legendary/RightBlock/TopUsers";
import { usePathname } from "next/navigation";
import Tabs from "../../../../components/legendary/common/Tabs";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
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
    <>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <NavigationLayout />
          <CreateButton />
        </div>
        <div className={styles.middleColumn}>
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
          {children}
        </div>
        <div className={styles.rightColumn}>
          <Premium />
          <TopUsers />
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default observer(LayoutPages);
