"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styles from "./AccountBlock.module.scss";
import Sun from "../../../../public/img/svg/Sun";
import Moon from "../../../../public/img/svg/Moon";
import Arrow from "../../../../public/img/svg/Arrow";
import Exit from "../../../../public/img/svg/Exit";
import Mark from "../../../../public/img/svg/Mark";
import Avatar from "../../../../public/img/svg/Avatar";
import { observer } from "mobx-react-lite";
import Cog from "../../../../public/img/svg/Cog";
import Pen from "../../../../public/img/svg/Pen";
import { Context } from "../../../../app/(pages)/layout";
import changeTheme from "../../../../features/ChangeTheme";
import { AnimatePresence, motion } from "framer-motion";

const AccountBlock = () => {
  const [theme, setTheme] = useState(localStorage?.getItem("Theme") || "dark") as any;

  const { mobxStore, popupHandlers } = useContext(Context);

  const changeThemeHandler = () => {
    changeTheme();
    setTheme(localStorage.getItem("Theme") === "dark");
  };
  
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.menu}
      >
        <div className={styles.lists}>
          <h4 className={styles.title}>Аккаунт</h4>
          {mobxStore?.user?.email ? (
            <>
              <Link
                href={`/profile/${mobxStore.user.id}`}
                className={`${styles.block} ${styles.mrBottom}`}
              >
                <div className={styles.userMenu}>
                  <div className={`${styles.avatar}`}>
                    <Image
                      layout={"fill"}
                      src={`${mobxStore.user.avatarPath}`}
                      alt="ads"
                    />
                  </div>
                  <p className={styles.userName}>{mobxStore.user.username}</p>
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </div>
              </Link>
            </>
          ) : (
            <div
              className={`${styles.block} ${styles.mrBottom}`}
              onClick={() => popupHandlers.authPopupOpen()}
            >
              <div className={styles.userMenu}>
                <div className={styles.avatar}>
                  <Avatar />
                </div>
                <p className={styles.userName}>Войдите в аккаунт</p>
                <div className={styles.arrow}>
                  <Arrow />
                </div>
              </div>
            </div>
          )}
          {mobxStore?.user?.email && (
            <div className={`${styles.block} ${styles.mrBottom}`}>
              <Link href={"#"}>
                <div className={styles.userMenu}>
                  <div className={`${styles.bgAvatar} ${styles.blue}`}>
                    <Mark type={true} />
                  </div>
                  <p className={styles.userName}>Заметки (скоро)</p>
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </div>
              </Link>
              <Link href={`/profile/${mobxStore.user.id}/drafts`}>
                <div className={styles.userMenu}>
                  <div className={`${styles.bgAvatar} ${styles.orange}`}>
                    <Pen type={1} />
                  </div>
                  <p className={styles.userName}>Черновики</p>
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </div>
              </Link>
            </div>
          )}
          <Link
            className={`${styles.block} ${styles.mrBottom}`}
            onClick={() => changeThemeHandler()}
            href={"#"}
          >
            <div className={styles.userMenu}>
              <div className={`${styles.bgAvatar} ${styles.purple}`}>
                {theme ? <Sun /> : <Moon />}
              </div>
              <p className={styles.userName}>Изменить тему</p>
              <div className={styles.arrow}>
                <Arrow />
              </div>
            </div>
          </Link>
          {mobxStore?.user?.email && (
            <Link className={styles.block} href={"/settings"}>
              <div className={styles.userMenu}>
                <div className={`${styles.bgAvatar} ${styles.green}`}>
                  <Cog />
                </div>
                <p className={styles.userName}>Настройки</p>
                <div className={styles.arrow}>
                  <Arrow />
                </div>
              </div>
            </Link>
          )}
        </div>
        {mobxStore?.user?.email && (
          <Link
            onClick={() => mobxStore.logout()}
            className={styles.block}
            href={"#"}
          >
            <div className={styles.userMenu}>
              <div className={`${styles.bgAvatar} ${styles.gray}`}>
                <Exit />
              </div>
              <p className={styles.userName}>Выйти</p>
              <div className={styles.arrow}>
                <Arrow />
              </div>
            </div>
          </Link>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default observer(AccountBlock);
