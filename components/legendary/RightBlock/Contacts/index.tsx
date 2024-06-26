"use client";

import React, { useState } from "react";
import styles from "./Contacts.module.scss";
import Link from "next/link";
import Discord from "../../../../public/img/auth/discord";
import Telegram from "../../../../public/img/svg/telegram";
import Popup from "reactjs-popup";
import PremiumSettingsBlock from "../../MiddleBlock/PremiumSettingsBlock";
import OnlineCounter from "../../../../newComponents/onlineCounter";

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.contacts}>
        <h3 className={styles.title}>Контакты</h3>
        <div className={styles.item}>
          <Telegram />
          <a href="https://t.me/+YUehvP6Vwhs0NmVi">GameCust Dev</a>
        </div>
        <div className={styles.item}>
          <Discord /> <a href="https://discord.gg/DsYhXz9GZq">Vx1nGh Server</a>
        </div>
      </div>
      <div className={styles.politics}>
        <p onClick={() => setIsOpen(true)}>Поддержать проект</p>

        <Popup nested open={isOpen} onClose={() => setIsOpen(false)} modal>
          <PremiumSettingsBlock />
        </Popup>
        <Link href={"/copyright"}>Правообладателям</Link>
        <Link href={"/agreement"}>Пользовательское соглашение</Link>
        <Link href={"/privacy"}>Политика конфиденциальности</Link>
        <OnlineCounter />
      </div>
    </>
  );
};

export default Contacts;
