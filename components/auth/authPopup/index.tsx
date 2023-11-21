import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./authPopup.module.scss";
import Image from "next/image";
import { observer } from "mobx-react";
import { Context } from "../../../pages/_app";
import Login from "../login";
import Registration from "../registration";
import Close from "../../../public/img/svg/close";
import { AnimatePresence, motion } from "framer-motion";

const AuthPopup = () => {
  const labelRef = useRef<HTMLElement>(null) as any;
  const { popupHandlers } = useContext(Context);
  const [auth, setAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(popupHandlers.authPopup);

  const closePopup = () => {
    popupHandlers.authPopupClose();
    setIsOpen(false)
  };

  useEffect(() => {
      setIsOpen(popupHandlers.authPopup);
  }, [popupHandlers.authPopup]);

  if (!popupHandlers.authPopup) {
    return <></>;
  }

  return (
    <>
      <AnimatePresence>
        {isOpen ? (
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
                {auth ? <Login setAuth={setAuth} /> : <Registration setAuth={setAuth} />}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          null
        )}
      </AnimatePresence>
    </>
  );
};

export default observer(AuthPopup);
