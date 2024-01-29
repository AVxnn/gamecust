import React, {useState} from 'react';
import styles from './imagePost.module.scss'
import Slider from "react-slick";
import Image from 'next/image'

const ImagePost = ({href}: any) => {

  const [countImages, setCountImages] = useState(0) as any
  
  return (
    <div className={styles.imgCont}>
      <Image loading="lazy" layout={'fill'} className={styles.img} src={`${href}`} alt=""/>
    </div>
  )
};

export default ImagePost;
