import React from "react";
import styles from "./Contacts.module.scss";
import Link from "next/link";
import Discord from "../../../../public/img/auth/discord";

const Contacts = () => {
  return (
    <>
      <div className={styles.contacts}>
        <h3 className={styles.title}>Контакты</h3>
        <div className={styles.item}>
          <a href="https://t.me/+YUehvP6Vwhs0NmVi">GameCust Dev</a>
        </div>
        <div className={styles.item}>
          <Discord /> <a href="https://discord.gg/DsYhXz9GZq">Vx1nGh Server</a>
        </div>
      </div>
      <div className={styles.politics}>
        <Link href={"/gamecustplus"}>Поддержать проект</Link>
        <Link href={"/copyright"}>Правообладателям</Link>
        <Link href={"/agreement"}>Пользовательское соглашение</Link>
        <Link href={"/privacy"}>Политика конфиденциальности</Link>
      </div>
    </>
  );
};

export default Contacts;
