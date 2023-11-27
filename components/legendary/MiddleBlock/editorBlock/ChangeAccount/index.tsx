import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from "next/image"
import styles from "./ChangeAccount.module.scss"
import Arrow from '../../../../../public/img/svg/Arrow'
import AccountDrop from './AccountDrop'
import { AnimatePresence, motion } from 'framer-motion'
import { Context } from '../../../../../app/(pages)/layout'
import { observer } from 'mobx-react-lite'

const ChangeAccount = () => {

  const {mobxStore} = useContext(Context);
  
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

  return (
    <div
      ref={labelRef} 
      onClick={() => setClicked(!clicked)} 
      className={`${styles.profile} ${clicked ? styles.active : ''}`
      }>
        <div className={styles.avatar}>
          <Image layout={'fill'} src={`${mobxStore.user.avatarPath}`} alt="ads"/>
        </div>
        <p ref={popupRef} className={styles.name}>Личный блог</p>
        <Arrow />
        
        <AnimatePresence initial={false} mode="wait">
          {
            clicked && (
                <AccountDrop />
            )
          }
        </AnimatePresence>
    </div>
  )
}

export default observer(ChangeAccount);