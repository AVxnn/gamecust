import React from 'react';
import styles from './NewsSlider.module.scss'
import Slider from "react-slick";

const NewsSlider = () => {

  const data = [
    {
      background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Anime_Girl.png/2560px-Anime_Girl.png',
      title: 'Странник вернувшийся с пропавшего судна успешно проиграл свой дом...'
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
          width: '10px',
          height: '4px',
          borderRadius: '99px',
          backgroundColor: '#D5B5FF',
        }}
      >

      </div>
    )
  };

  return (
    <div className={styles.newsSlider}>
      <Slider {...settings}>
        {
          data.map((item: any, index: number) => {
            return (
              <div className={styles.slideItem}>
                <img className={styles.background} src={item.background} alt=""/>
                <div className={styles.shadow}></div>
                <span className={styles.subtitle}>{item.title}</span>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
};

export default NewsSlider;
