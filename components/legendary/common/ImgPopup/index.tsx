import React, {useState} from 'react';
import styles from './ImgPopup.module.scss'
import { motion, AnimatePresence } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from 'next/image'

const ImgPopup = ({data} : any) => {

  const [active, setActive] = useState(null) as any;

  return (
    <>
      <div className={styles.container}>
        <motion.img
          className={styles.imageCont}
          src={process.env.NEXT_PUBLIC_IMAGES_URL + data?.href}
          onClick={() => setActive(true)}
          layoutId={"image" + data.href} />
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
              <motion.img src={process.env.NEXT_PUBLIC_IMAGES_URL + data?.href} layoutId={"image" + data.href} onClick={() => setActive(null)} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ImgPopup;
