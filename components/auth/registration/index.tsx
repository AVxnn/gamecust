import React, { useState } from "react";
import Image from "next/image";
import styles from "./registration.module.scss";
import bg from "../../../public/img/auth/bg.png";
import Discord from "../../../public/img/auth/discord";
import Vk from "../../../public/img/auth/vk";
import Google from "../../../public/img/auth/google";
import Mail from "../../../public/img/auth/mail";
import Gamecust from "../../../public/img/main/gamecust";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import RegistrationForm from "../registrationForm";
import Arrow from "../../../public/img/svg/Arrow";

const Registration = ({ setAuth }: any) => {
  const { status, data: session } = useSession();
  const [isEmail, setIsEmail] = useState(false);

  const openEmailPassword = () => {
    setIsEmail(!isEmail);
  };

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div onClick={() => openEmailPassword()} className={styles.back}>
                <Arrow /> Назад
              </div>
              <RegistrationForm />
            </motion.div>
          )}
          <span className={styles.text}>
            Есть аккаунт?{" "}
            <span onClick={() => setAuth(false)} className={styles.link}>
              Войти
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
