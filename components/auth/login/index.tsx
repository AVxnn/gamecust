import React from "react";
import Image from "next/image";
import styles from "./login.module.scss";
import bg from "../../../public/img/auth/bg.png";
import Discord from "../../../public/img/auth/discord";
import Vk from "../../../public/img/auth/vk";
import Google from "../../../public/img/auth/google";
import Mail from "../../../public/img/auth/mail";
import Gamecust from "../../../public/img/main/gamecust";

const Login = ({ setAuth } : any) => {

  return (
    <div className={styles.login}>
      <div className={styles.leftBlock}>
        <Image layout="fill" src={bg} alt={"background Auth"} />
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.container}>
          <div className={styles.mLogo}>
            <Gamecust />
          </div>
          <h6 className={styles.title}>Вход в аккаунт</h6>
          <div className={styles.buttonList}>
            <button className={`${styles.buttonAuth} ${styles.discord}`}>
              <div className={styles.div}>
                <Discord />
                <span>Discord</span>
              </div>
            </button>
            <button className={styles.buttonAuth}>
              <div className={styles.div}>
                <Vk />
                <span>ВКонтакте</span>
              </div>
            </button>
            <button className={styles.buttonAuth}>
              <div className={styles.div}>
                <Mail />
                <span>Почта</span>
              </div>
            </button>
            <button className={styles.buttonAuth}>
              <div className={styles.div}>
                <Google />
                <span>Google</span>
              </div>
            </button>
          </div>
          <span className={styles.text}>
            Нет аккаунта? <span onClick={() => setAuth(false)} className={styles.link}>Регистрация</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
