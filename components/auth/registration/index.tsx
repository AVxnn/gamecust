import React from "react";
import Image from "next/image";
import styles from "./registration.module.scss";
import bg from "../../../public/img/auth/bg.png";
import Discord from "../../../public/img/auth/discord";
import Vk from "../../../public/img/auth/vk";
import Google from "../../../public/img/auth/google";
import Mail from "../../../public/img/auth/mail";
import Gamecust from "../../../public/img/main/gamecust";
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react";

const Registration = ({ setAuth } : any) => {
  const { status, data: session } = useSession();
  console.log(session)
  return (
    <div className={styles.registration}>
      <div className={styles.leftBlock}>
        <Image layout="fill" src={bg} alt={"background Auth"} />
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.container}>
          <div className={styles.mLogo}>
            <Gamecust />
          </div>
          <h6 className={styles.title}>Регистрация аккаунта</h6>
          <div className={styles.buttonList}>
            <button onClick={() => signIn('discord')} className={`${styles.buttonAuth} ${styles.discord}`}>
              <div className={styles.div}>
                <Discord />
                <span>Discord</span>
              </div>
            </button>
            <button className={styles.buttonAuth}>
              <div className={`${styles.div} ${styles.mail}`}>
                <Mail />
                <span>Почта</span>
              </div>
            </button>
            <button onClick={() => signIn('google')} className={styles.buttonAuth}>
              <div className={styles.div}>
                <Google />
                <span>Google</span>
              </div>
            </button>
          </div>
          <span className={styles.text}>
            Есть аккаунт? <span onClick={() => setAuth(true)} className={styles.link}>Войти</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
