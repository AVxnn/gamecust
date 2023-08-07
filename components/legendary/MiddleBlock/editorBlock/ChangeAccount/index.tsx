import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import styles from "./ChangeAccount.module.scss"
import Arrow from '../../../../../public/img/svg/Arrow'
import AccountDrop from './AccountDrop'
import { motion } from 'framer-motion'

const ChangeAccount = () => {

  const popupRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [clicked, setClicked] = useState<boolean>(false)

  const handleClickOutside = (e: any) => {
    if (clicked) {
      if (labelRef.current &&
        !labelRef.current.contains(e.target) &&
        popupRef.current &&
        !popupRef.current.contains(e.target)) {
          setClicked(false)
      }
    }
  }

  useEffect(() => {
    if (typeof document !== "undefined" && clicked) {
      document.addEventListener('click', (e: any) => {
        handleClickOutside(e);
      })
      return document.removeEventListener('click', (e: any) => {
          handleClickOutside(e);
      })
    }
  })

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <div
      ref={labelRef} 
      onClick={() => setClicked(!clicked)} 
      className={`${styles.profile} ${clicked ? styles.active : ''}`
      }>
        <div className={styles.avatar}>
          <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
        </div>
        <p ref={popupRef} className={styles.name}>Личный блог</p>
        <Arrow />
        {
          clicked && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }} 
              ref={popupRef} 
              className={styles.toolbar}>
              <AccountDrop />
            </motion.div>
          )
        }
    </div>
  )
}

export default ChangeAccount;