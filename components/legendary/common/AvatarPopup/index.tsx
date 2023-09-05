import React, {useState} from 'react';
import styles from './AvatarPopup.module.scss'
import { motion, AnimatePresence } from "framer-motion";

const AvatarPopup = ({src} : any) => {

  const [active, setActive] = useState(null) as any;

  return (
    <>
      <div className={styles.container}>
        <motion.img
          className={styles.imageCont}
          src={src}
          onClick={() => setActive(true)}
          layoutId={"image" + src} />
      </div>
      <div className={styles.imgPopup}>
        <AnimatePresence>
          {active && (
            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 222,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <motion.div
                onClick={() => setActive(null)}
                style={{
                  position: "absolute",
                  zIndex: -1,
                  inset: 0,
                  background: "black"
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
              />
              <motion.img src={src} layoutId={"image" + src} onClick={() => setActive(null)} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AvatarPopup