import React, {useState} from 'react';
import styles from './ImageAndSlider.module.scss'
import Slider from "react-slick";
import Image from 'next/image'

const ImageAndSlider = ({data}: any) => {

  const [countImages, setCountImages] = useState(0) as any
  
  return (
    <div className={styles.imgCont}>
      <Image loading="lazy" layout={'fill'} className={styles.img} src={`${data?.href}`} alt=""/>
    </div>
  )
};

export default ImageAndSlider;
