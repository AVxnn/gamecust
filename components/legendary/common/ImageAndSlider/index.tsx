import React, {useState} from 'react';
import styles from './ImageAndSlider.module.scss'
import Slider from "react-slick";
import Image from 'next/image'

const ImageAndSlider = ({data}: any) => {

  const [countImages, setCountImages] = useState(0) as any

  let settings = {
    className: "",
    dots: false,
    infinite: false,
    slidesToShow: 1,
    speed: 250,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: any, next: any) => setCountImages(next),
  };
  console.log(countImages)
  if(data.images.length > 1) {
    return (
      <div id={'postImageSlider'} className={styles.slider_images}>
        <div className={styles.counter}>
          <span className={styles.text}>{`${countImages + 1}/${data.images.length}`}</span>
        </div>
        <Slider {...settings}>
          {
            data.images.map((item: any, index: number) => {
              return (
                <div className={styles.imgC}>
                  <Image className={styles.images} layout={'fill'} key={index} src={item} alt=""/>
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }

  return (
    <img className={styles.img} src={data.img} alt=""/>
  )
};

export default ImageAndSlider;
