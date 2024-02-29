import React, { useState } from "react";
import styles from "./ImgPopup.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Spoiler from "../../../../newComponents/post/postItem/UI/Spoiler";

const ImgPopup = ({ item }: any) => {
  const [active, setActive] = useState(null) as any;

  return item?.href ? (
    <>
      <div className={styles.container}>
        <Zoom classDialog={styles.dialog}>
          <motion.img
            loading="lazy"
            className={styles.img}
            src={item.href}
            onClick={() => setActive(true)}
          />
        </Zoom>
        <Spoiler item={item}/>
      </div>
    </>
  ) : null;
};

export default ImgPopup;
