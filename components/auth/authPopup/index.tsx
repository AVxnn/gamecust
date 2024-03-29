import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./authPopup.module.scss";
import Image from "next/image";
import { observer } from "mobx-react";
import Login from "../login";
import Registration from "../registration";
import Close from "../../../public/img/svg/close";
import { AnimatePresence, motion } from "framer-motion";
import { Context } from "../../../app/(pages)/layout";

const AuthPopup = () => {
  const labelRef = useRef<HTMLElement>(null) as any;
  const { popupHandlers } = useContext(Context);
  const [auth, setAuth] = useState(false);

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
              <AnimatePresence>
                {auth ? (
                  <Registration setAuth={setAuth} />
                ) : (
                  <Login setAuth={setAuth} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default observer(AuthPopup);
