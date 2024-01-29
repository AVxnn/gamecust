import React, { useState } from "react";
import styles from "./ImgPopup.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ImgPopup = ({ src }: any) => {
  const [active, setActive] = useState(null) as any;

  return (
    <>
      <div className={styles.container}>
        <Zoom classDialog={styles.dialog}>
          <motion.img
            loading="lazy"
            className={styles.img}
            src={src}
            onClick={() => setActive(true)}
          />
        </Zoom>
      </div>
    </>
  );
};

export default ImgPopup;
