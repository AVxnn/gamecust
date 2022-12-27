import React from 'react';
import styles from './PopupImg.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import Plus from "../../../public/img/svg/Plus";
import {close} from "../../../features/Popup/PopupSlice";

const PopupImg = ({data} : any) : JSX.Element => {

  const count = useSelector((state: RootState) => state.popup)

  const dispatch = useDispatch()

  const closePopup = () => {
    dispatch(close())
  }

  if (count.open) {
    if (data.type === 'images') {
      return (
        <div className={styles.popupImg}>

        </div>
      )
    }
    if (data.type === 'img') {
      return (
        <div className={styles.popupImg}>
          <img className={styles.image} src={count.img} alt=""/>
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
  }
  return <div></div>
};

export default PopupImg;
