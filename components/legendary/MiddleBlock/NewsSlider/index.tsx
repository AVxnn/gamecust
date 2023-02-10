import React from 'react';
import styles from './NewsSlider.module.scss'
import Slider from "react-slick";
import Button from "../../common/Button";
import Image from 'next/image'

const NewsSlider = () => {

  const data = [
    {
      background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Anime_Girl.png/2560px-Anime_Girl.png',
      title: 'Новая ММОРПГ игра основанная на стрельбе и строительстве, реализованная на новом движке UNREAL ENGINE 7'
    },
    {
      background: 'https://assets3.thrillist.com/v1/image/3055763/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70',
      title: 'Новая ММОРПГ игра основанная на стрельбе и строительстве, реализованная на новом движке UNREAL ENGINE 7'
    },
  ]

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5500,
    cssEase: "ease",
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          height: '6px',
          borderRadius: '99px',
          backgroundColor: '#D5B5FF',
        }}
      >

      </div>
    )
  };

  return (
    <div className={styles.newsSlider} id={'newsSlider'}>
      <Slider {...settings}>
        {
          data && data.map((item: any, index: number) => {
            return (
              <>
                <div key={index} className={styles.container}>
                  <div className={styles.slideItem}>
                    <div className={styles.left}>
                      <div className={styles.contImg}>
                        <Image layout={'fill'} className={styles.background} src={item.background} alt=""/>
                      </div>
                      <div className={styles.shadow}></div>
                      <span className={styles.subtitle}>{item.title}</span>
                    </div>

                  </div>
                  <div className={styles.btn}>
                    <Button type={'secondary'} size={'small'}>Узнать больше</Button>
                  </div>
                </div>
              </>
            )
          })
        }
      </Slider>
    </div>
  );
};

export default NewsSlider;
