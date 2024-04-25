import React, { useContext, useRef, useState } from "react";
import styles from "./authPopup.module.scss";
import Image from "next/image";
import { observer } from "mobx-react";
import bg from "../../../public/img/auth/bg.png";
import Login from "../login";
import Registration from "../registration";
import Close from "../../../public/img/svg/close";
import { AnimatePresence, motion } from "framer-motion";
import { Context } from "../../../app/(pages)/layout";
import AuthEmailCode from "../AuthEmailCode";

const AuthPopup = () => {
  const labelRef = useRef<HTMLElement>(null) as any;
  const { popupHandlers } = useContext(Context);
  const [steps, setSteps] = useState(2);

  const closePopup = () => {
    popupHandlers.authPopupClose();
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {popupHandlers.authPopup && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => popupHandlers.authPopupClose()}
            className={styles.authPopup}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              ref={labelRef}
              className={styles.container}
            >
              <div onClick={closePopup} className={styles.close}>
                <Close />
              </div>
              <div className={styles.auth}>
                <div className={styles.leftBlock}>
                  <Image layout="fill" src={bg} alt={"background Auth"} />
                </div>
                <AnimatePresence>
                  {steps === 1 && <Registration setSteps={setSteps} />}
                  {steps === 2 && <Login setSteps={setSteps} />}
                  {steps === 3 && <AuthEmailCode setSteps={setSteps} />}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default observer(AuthPopup);
