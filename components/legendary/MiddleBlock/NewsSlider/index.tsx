import React from 'react';
import styles from './NewsSlider.module.scss'
import Slider from "react-slick";
import Image from 'next/image'
import Button from '../../common/Button';

const NewsSlider = () => {

  const data = [
    {
      background: 'https://gamecust.online/static/48e5fe68-0b99-4f59-a730-774628e792c1.jpg',
      title: 'Обновки за 15 августа'
    },
    {
      background: 'https://gamecust.online/static/8621e171-c041-4443-bf33-343f50540568.png',
      title: 'Сиквел Сноураннер, Бладраннер, доступность игры в Стим и ЕГС и другие новости'
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
