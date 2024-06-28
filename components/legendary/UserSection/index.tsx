import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./UserSection.module.scss";
import Arrow from "../../../public/img/svg/Arrow";
import Image from "next/image";
import Link from "next/link";
import Cog from "../../../public/img/svg/Cog";
import Exit from "../../../public/img/svg/Exit";
import Sun from "../../../public/img/svg/Sun";
import Moon from "../../../public/img/svg/Moon";
import changeTheme from "../../../features/ChangeTheme";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { Context } from "../../../app/(pages)/layout";
import { AnimatePresence, motion } from "framer-motion";
import Pen from "../../../public/img/svg/Pen";
import Mark from "../../../public/img/svg/Mark";
import Premium from "../../../public/img/svgIcons/Premium";
import Popup from "reactjs-popup";
import PremiumSettingsBlock from "../MiddleBlock/PremiumSettingsBlock";
import Bug from "../../../public/img/svg/Bug";

const UserSection = () => {
  const [theme, setTheme] = useState(localStorage.getItem("Theme"));

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const { mobxStore } = useContext(Context);

  const Button = useRef<HTMLDivElement>(null);

  const changeThemeHandler = (theme: any) => {
    changeTheme(localStorage.getItem("Theme") === "dark" ? "white" : "dark");
    setTheme(localStorage.getItem("Theme") as any);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    mobxStore.logout();
  };

  const popupRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [dropMenu, setDropMenu] = useState(false);

  const closePopup = () => {
    setDropMenu(false);
  };

  const handleClickOutside = (e: any) => {
    if (dropMenu) {
      if (
        labelRef.current &&
        !labelRef.current.contains(e.target) &&
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setDropMenu(false);
      }
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined" && dropMenu) {
      document.addEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
      return document.removeEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
    }
  });

  return (
    <>
      <div
        ref={Button}
        className={`${styles.container} ${dropMenu ? styles.active : ""}`}
      >
        <div
          ref={labelRef}
          onClick={() => setDropMenu(!dropMenu)}
          className={`${styles.user} ${dropMenu ? styles.active : ""}`}
        >
          <div className={styles.avatar}>
            {mobxStore.user.avatarPath && (
              <Image
                layout={"fill"}
                src={`${mobxStore?.user?.avatarPath}`}
                alt="ads"
              />
            )}
          </div>
          <div
            style={{
              transform: dropMenu ? "rotate(180deg)" : "rotate(0deg)",
            }}
            className={styles.arrowDown}
          >
            <Arrow />
          </div>
        </div>
        <AnimatePresence initial={false} mode="wait">
          {dropMenu && (
            <motion.div
              exit={{ opacity: 0, top: 70 }}
              initial={{ opacity: 0, top: 70 }}
              animate={{ opacity: 1, top: 50 }}
              ref={popupRef}
              className={styles.menu}
            >
              <h4 className={styles.title}>Мой профиль</h4>
              <Link href={`/profile/${mobxStore.user.id}`}>
                <div onClick={() => closePopup()} className={styles.userMenu}>
                  <div className={styles.avatar}>
                    <Image
                      layout={"fill"}
                      src={`${mobxStore.user.avatarPath}`}
                      alt="ads"
                    />
                  </div>
                  <div className={styles.container}>
                    <p className={styles.userName}>{mobxStore.user.username}</p>
                    <span className={styles.description}>Личный блог</span>
                  </div>
                </div>
              </Link>
              <Link href={`/`}>
                <div
                  onClick={() => setIsOpen(true)}
                  className={`${styles.userMenu} ${styles.premium}`}
                >
                  <div className={styles.bgPremium}>
                    <Premium />
                  </div>
                  <p className={styles.text}>Подписка Plus</p>
                </div>
                <Popup
                  nested
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  modal
                >
                  <PremiumSettingsBlock />
                </Popup>
              </Link>
              <Link href={`/`}>
                <div
                  onClick={() => closePopup()}
                  className={`${styles.userMenu} ${styles.marks}`}
                >
                  <div className={styles.bgAvatar}>
                    <Mark type={0} />
                  </div>
                  <p className={styles.text}>Заметки (скоро)</p>
                </div>
              </Link>
              <Link href={`/profile/${mobxStore.user.id}/drafts`}>
                <div
                  onClick={() => closePopup()}
                  className={`${styles.userMenu} ${styles.pen}`}
                >
                  <div className={styles.bgAvatar}>
                    <Pen type={0} />
                  </div>
                  <p className={styles.text}>Черновики</p>
                </div>
              </Link>
              {mobxStore.user.roles.includes("admin") && (
                <Link href={"/adminpanel"}>
                  <div onClick={() => closePopup()} className={styles.userMenu}>
                    <div className={styles.bgAvatar}>
                      <Bug />
                    </div>
                    <p className={styles.text}>Админ панель</p>
                  </div>
                </Link>
              )}
              <Link href={"/settings"}>
                <div onClick={() => closePopup()} className={styles.userMenu}>
                  <div className={styles.bgAvatar}>
                    <Cog />
                  </div>
                  <p className={styles.text}>Настройки</p>
                </div>
              </Link>
              <Link onClick={() => changeThemeHandler(theme)} href={"#"}>
                <div className={styles.userMenu}>
                  <div className={styles.bgAvatar}>
                    {theme === "white" ? <Sun /> : <Moon />}
                  </div>
                  <p className={styles.text}>Изменить тему</p>
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </div>
              </Link>
              <Link onClick={() => logOut()} href={"#"}>
                <div
                  onClick={() => closePopup()}
                  className={`${styles.userMenu} ${styles.exit}`}
                >
                  <div className={styles.bgAvatar}>
                    <Exit />
                  </div>
                  <p className={styles.text}>Выйти</p>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default observer(UserSection);
