import React from 'react';
import {useDispatch} from "react-redux";
import styles from './ImgPopup.module.scss'
import {addImg, open} from "../../../../features/Popup/PopupSlice";
import Image from 'next/image'

const ImgPopup = ({data} : any) => {

  const dispatch = useDispatch()
  const openPopup = () => {
    dispatch(open())
    dispatch(addImg(data.img))
  }

  return (
    <>
      <Image className={styles.imgPopup} onClick={() => openPopup()} width={600} height={500} src={data.img} alt=""/>
    </>
  );
};

export default ImgPopup;
