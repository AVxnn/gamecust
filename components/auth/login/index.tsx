import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./login.module.scss";
import bg from "../../../public/img/auth/bg.png";
import Discord from "../../../public/img/auth/discord";
import Vk from "../../../public/img/auth/vk";
import Google from "../../../public/img/auth/google";
import Mail from "../../../public/img/auth/mail";
import Gamecust from "../../../public/img/main/gamecust";
import Arrow from "../../../public/img/svg/Arrow";
import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "../loginForm";

const Login = ({ setAuth }: any) => {
  const [isEmail, setIsEmail] = useState(false);

  const openEmailPassword = () => {
    setIsEmail(!isEmail);
  };

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
            {!isEmail && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.buttonList}
              >
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
                <button
                  onClick={() => openEmailPassword()}
                  className={styles.buttonAuth}
                >
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
              </motion.div>
            )}
            {isEmail && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div
                  onClick={() => openEmailPassword()}
                  className={styles.back}
                >
                  <Arrow /> Назад
                </div>
                <LoginForm />
              </motion.div>
            )}
          <span className={styles.text}>
            Нет аккаунта?{" "}
            <span onClick={() => setAuth(false)} className={styles.link}>
              Регистрация
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
