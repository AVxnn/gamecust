import React, {useState} from 'react';
import styles from './ImgPopup.module.scss'
import { motion, AnimatePresence } from "framer-motion";

const ImgPopup = ({src} : any) => {

  const [active, setActive] = useState(null) as any;

  return (
    <>
      <div className={styles.container}>
        <motion.img
          className={styles.imageCont}
          src={src}
          loading="lazy"
          onClick={() => setActive(true)}
          layoutId={"image" + src} />
      </div>
      <div className={styles.imgPopup}>
        <AnimatePresence>
          {active !== null && (
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
              <motion.img loading="lazy" src={src} layoutId={"image" + src} onClick={() => setActive(null)} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ImgPopup;
