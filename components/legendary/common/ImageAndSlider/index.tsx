import React, {useState} from 'react';
import styles from './ImageAndSlider.module.scss'
import Slider from "react-slick";
import Image from 'next/image'

const ImageAndSlider = ({data}: any) => {

  const [countImages, setCountImages] = useState(0) as any
  
  let settings = {
    className: "",
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    speed: 250,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: any, next: any) => setCountImages(next),
  };
  
  // if(data.images.length > 1) {
  //   return (
  //     <div id={'postImageSlider'} className={styles.slider_images}>
  //       <div className={styles.counter}>
  //         <span className={styles.text}>{`${countImages + 1}/${data.images.length}`}</span>
  //       </div>
  //       <Slider {...settings}>
  //         {
  //           data.images.map((item: any, index: number) => {
  //             return (
  //               <div key={index} className={styles.imgC}>
  //                 <Image className={styles.images} layout={'fill'} src={item} alt=""/>
  //               </div>
  //             )
  //           })
  //         }
  //       </Slider>
  //     </div>
  //   )
  // }

  return (
    <div className={styles.imgCont}>
      <Image layout={'fill'} className={styles.img} src={`${process.env.NEXT_PUBLIC_IMAGES_URL}${data?.href}`} alt=""/>
    </div>
  )
};

export default ImageAndSlider;
