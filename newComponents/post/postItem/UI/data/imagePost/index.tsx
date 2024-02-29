import React, { useState } from "react";
import styles from "./imagePost.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import Spoiler from "../../Spoiler";

const ImagePost = ({ item }: any) => {
  const [countImages, setCountImages] = useState(0) as any;

  return (
    <div className={styles.imgCont}>
      <Image layout={"fill"} className={styles.img} src={item.href} alt="" />
      <Spoiler item={item}/>
    </div>
  );
};

export default ImagePost;
