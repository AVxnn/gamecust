import React, { useContext, useEffect, useState } from "react";
import Home from "../../../../public/img/svg/Home";
import PlusMenu from "../../../../public/img/svg/PlusMenu";
import Search from "../../../../public/img/svg/Search";
import styles from "./MobileMenu.module.scss";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../../../../public/img/svg/Avatar";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { open } from "../../../../features/Popup/PopupAuthSlice";
import uuid from "react-uuid";
import { observer } from "mobx-react";
import { Context } from "../../../../app/(pages)/layout";
import Bell from "../../../../public/img/svg/bell";

const MobileMenu = () => {
  const dispatch = useDispatch();

  const { mobxStore } = useContext(Context);

  const router = useRouter();
  const pathname = usePathname();

  const [active, setActive] = useState(null) as any;

  const redirectLink = (link: string) => {
    if (!mobxStore.user.email) {
      return dispatch(open());
    }
    router.push(link);
  };

  const editorLink = () => {
    setActive(2);
    redirectLink(
      `/editor/${mobxStore?.user?.id}/${uuid()}-${mobxStore.user.username}`
    );
  };

  useEffect(() => {
    switch (pathname) {
      case "/":
        setActive(0);
        break;
      case "/search":
        setActive(1);
        break;
      case "/notifications":
        setActive(3);
        break;
      case "/account":
        setActive(4);
        break;
      default:
        setActive(10);
        break;
    }
  }, [pathname]);

  return (
    <>
      <div className={`${styles.mobileMenu}`}>
        <Link
          onClick={() => setActive(0)}
          className={`${styles.link} ${active == 0 ? styles.active : ""}`}
          href={"/"}
        >
          <Home />
        </Link>
        <Link
          onClick={() => setActive(1)}
          className={`${styles.link} ${active == 1 ? styles.active : ""}`}
          href={"/search"}
        >
          <Search />
        </Link>
        <Link
          onClick={() => setActive(3)}
          className={`${styles.link} ${active == 3 ? styles.active : ""}`}
          href={"/"}
        >
          <Bell />
        </Link>
        {mobxStore?.user?.email ? (
          <Link
            onClick={() => setActive(4)}
            className={`${styles.link} ${active == 4 ? styles.active : ""}`}
            href={"/account"}
          >
            <div className={styles.avatar}>
              <Image
                layout={"fill"}
                src={`${mobxStore.user.avatarPath}`}
                alt="ads"
              />
            </div>
          </Link>
        ) : (
          <Link
            onClick={() => setActive(4)}
            className={`${styles.link} ${active == 4 ? styles.active : ""}`}
            href={"/account"}
          >
            <div className={styles.avatar}>
              <Avatar />
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default observer(MobileMenu);
