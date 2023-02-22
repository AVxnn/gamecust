import React, {useEffect, useRef, useState} from 'react';
import styles from './PopupImg.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import Plus from "../../../public/img/svg/Plus";
import {close} from "../../../features/Popup/PopupSlice";
import Image from "next/image";
import {log} from "util";

const PopupImg = ({data} : any) : JSX.Element => {

  const count = useSelector((state: RootState) => state.popup)
  const [widthw, setWidthw] = useState(100)
  const [sized, setSized] = useState({}) as any

  const dispatch = useDispatch()

  const ref = useRef(null)

  const closePopup = () => {
    dispatch(close())
    number = 100
    setWidthw(number)
    setSized(0, 0)
  }

  let number = 100

  let catchCombination = (e : any) => {
    
    if (e.shiftKey && e.deltaY < -0) {
      if (number < 50) {
        return null
      }
      number -= 10
      setWidthw(number)
    } else if(e.shiftKey && e.deltaY > 0) {
      if (number > 200) {
        return null
      }
      number += 10
      setWidthw(number)
    }
    return null
  }

  const moveImage = (e: any) => {
    console.log(e)
    if (e.clientX !== 0) {
      setSized({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2
      })
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", e => catchCombination(e));
    return () => {
      window.removeEventListener("wheel", e => catchCombination(e));
    }
  }, [catchCombination])

  if (data.type === 'images') {
    return (
      <div className={styles.popupImg}>

      </div>
    )
  }
  if (data.type === 'img') {
    return (
      <div className={`${styles.popupImg} ${count.open ? styles.popupImgOpen : ''}`}
        >
        <div
          style={{transform: `scale(${widthw}%) translateX(${sized.x ? sized.x : 0}px) translateY(${sized.y ? sized.y : 0}px)`}}
          className={styles.imgContainer}
        >
          <Image ref={ref}
                 className={styles.image}
                 draggable={true}
                 layout={'fill'}
                 onDrag={(e) => moveImage(e)}
                 src={count.img}
                 alt=""/>
        </div>
        <div onClick={() => closePopup()} className={styles.close}>
          <Plus/>
        </div>
      </div>
    )
  }
  if (data.type === 'video') {
    return (
      <div className={styles.popupImg}>

      </div>
    )
  }
  return <div></div>
};

export default PopupImg;
