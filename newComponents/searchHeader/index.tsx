import React, { useEffect, useRef, useState } from "react";
import styles from "./searchHeader.module.scss";
import Tabs from "../../components/legendary/common/Tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { declOfNum } from "../../utils/declOfNum";

const SearchHeader = ({ data }: any) => {
  const [active, setActive] = useState(0);
  const [dataTagAccount, setDataTagAccount] = useState([
    {
      title: "Статьи",
      link: "",
    },
    {
      title: "Пользователи",
      link: "users",
    },
  ]) as any;
  const menuRef = useRef<HTMLUListElement>(null);

  const pathname = usePathname() as any;
  const params = useSearchParams() as any;

  const changePage = (index: number) => {
    setActive(index);
  };

  useEffect(() => {
    switch (pathname.split("/")[3]) {
      case "":
        return setActive(0);
      case "users":
        return setActive(1);
      case "drafts":
        return setActive(2);
      default:
        return setActive(0);
    }
  }, [pathname]);
  return (
    <>
      <div className={styles.profileBlock}>
        <div className={styles.header}></div>
        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.headers}>
              <span className={styles.title}>{params.get("query")}</span>
            </div>
            <div className={styles.date}>
              {active == 0
                ? `${declOfNum(data?.posts?.length, [
                    "Найден",
                    "Найдено",
                    "Найдено",
                  ])} ${data?.posts?.length}  ${declOfNum(data?.posts?.length, [
                    "пост",
                    "поста",
                    "постов",
                  ])}`
                : `${declOfNum(data?.users?.length, [
                    "Найден",
                    "Найдено",
                    "Найдено",
                  ])} ${data?.users?.length} ${declOfNum(data?.users?.length, [
                    "пользователь",
                    "пользователя",
                    "пользователей",
                  ])}`}
            </div>
            <ul ref={menuRef} className={styles.navigation}>
              {dataTagAccount &&
                dataTagAccount.map((item: any, index: number) => {
                  return (
                    <Tabs
                      link={`/search/result/${item.link}?query=${params.get(
                        "query"
                      )}`}
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
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
