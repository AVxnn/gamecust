import React, { useContext } from "react";
import styles from "./AuthEmailCode.module.scss";
import { motion } from "framer-motion";
import Gamecust from "../../../public/img/main/gamecust";
import Mail from "../../../public/img/auth/mail";
import { Context } from "../../../app/(pages)/layout";

const AuthEmailCode = ({ setSteps }: any) => {
  const { popupHandlers } = useContext(Context);
  const handlerClose = () => {
    popupHandlers.authPopupClose();
    setSteps(1);
  };

  return (
    <div className={styles.rightBlock}>
      <div className={styles.container}>
        <div className={styles.mLogo}>
          <Gamecust />
        </div>
        <div className={styles.show}></div>
        <div className={styles.info}>
          <Mail />
          <h6 className={styles.title}>Проверьте почту</h6>
          <p className={styles.subtitle}>
            Мы отправили на ваш Email ссылку для подтверждения аккаунта, многие
            функции не будут доступны до подтверждения!
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.buttonList}
        >
          <button onClick={() => handlerClose()} className={styles.button}>
            Завершить
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthEmailCode;
