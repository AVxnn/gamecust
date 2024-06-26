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
import { signIn } from "next-auth/react";

const Login = ({ setSteps }: any) => {
  const [isEmail, setIsEmail] = useState(false);

  const openEmailPassword = () => {
    setIsEmail(!isEmail);
  };

  return (
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
            <button
              onClick={() => signIn("discord")}
              className={`${styles.buttonAuth} ${styles.discord}`}
            >
              <div className={styles.div}>
                <Discord />
                <span>Discord</span>
              </div>
            </button>
            <button
              onClick={() => openEmailPassword()}
              className={styles.buttonAuth}
            >
              <div className={`${styles.div} ${styles.mail}`}>
                <Mail />
                <span>Почта</span>
              </div>
            </button>
            <button
              onClick={() => signIn("google")}
              className={styles.buttonAuth}
            >
              <div className={styles.div}>
                <Google />
                <span>Google</span>
              </div>
            </button>
          </motion.div>
        )}
        {isEmail && (
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div onClick={() => openEmailPassword()} className={styles.back}>
              <Arrow /> Назад
            </div>
            <LoginForm />
          </motion.div>
        )}
        <span className={styles.text}>
          Нет аккаунта?{" "}
          <span onClick={() => setSteps(1)} className={styles.link}>
            Регистрация
          </span>
        </span>
      </div>
    </div>
  );
};

export default Login;
