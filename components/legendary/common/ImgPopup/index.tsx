import React from 'react';
import {useDispatch} from "react-redux";
import styles from './ImgPopup.module.scss'
import {addImg, open} from "../../../../features/Popup/PopupSlice";

const ImgPopup = ({data} : any) => {

  const dispatch = useDispatch()

  const openPopup = () => {
    dispatch(open())
    dispatch(addImg(data.img))
  }

  return (
    <>
      <img className={styles.imgPopup} onClick={() => openPopup()} src={data.img} alt=""/>
    </>
  );
};

export default ImgPopup;
