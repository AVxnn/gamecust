import React, { useState } from "react";
import styles from "./lvlPopup.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"
import { checkColor, getExp, getNextColor } from "../componentColors/checkColor";

const LvlPopup = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <span 
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={styles.lvl}>Ур. {data.level}</span>
      <AnimatePresence initial={false} mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.dropdown}
          >
            <div className={styles.top}>
              <div style={{borderColor: checkColor(data.level).color}} className={styles.image}>
                <Image layout={'fill'} src={data.avatarPath} alt={"avatar"}/>
              </div>
              <div className={styles.nextLvl}>
                <p className={styles.title}>Следующий уровень</p>
                <span className={styles.subtitle}>{data.level + 1}</span>
              </div>
              <div style={{borderColor: getNextColor(data.level).color}} className={styles.image}>
                <Image layout={'fill'} src={data.avatarPath} alt={"avatar"}/>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.exp}>
                <span className={styles.text}>{getExp(+data.exp)?.currentExp}</span>
                <span className={styles.text}>{getExp(+data.exp)?.maxExp}</span>
              </div>
              <div className={styles.line}>
                <div style={{width: (getExp(+data.exp)?.currentExp / getExp(+data.exp)?.maxExp) * 100 + '%'}} className={styles.inLine}></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LvlPopup;
