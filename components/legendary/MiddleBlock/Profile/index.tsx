import React, {useEffect, useRef, useState} from 'react';
import styles from './Profile.module.scss'
import CheckIcon from "../../../../public/img/svg/CheckIcon";
import Trand from "../../../../public/img/svg/Trand";
import Tabs from "../../common/Tabs";
import Button from "../../common/Button";
import Dots from "../../../../public/img/svg/Dots";

const data = [
  {
    title: 'Статьи',
  },
  {
    title: 'Комментарии',
  },
  {
    title: 'Подробнее',
  }
]

const ProfileBlock = () => {

  const [active, setActive] = useState(0)
  const [showFixedMenu, setShowFixedMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const changePage = (index : number) => {
    setActive(index)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {

        if (menuRef.current && menuRef.current.getBoundingClientRect().top <= 13) {
          setShowFixedMenu(true)
        } else {
          setShowFixedMenu(false)
        }
      })
    }
  })

  return (
    <>
      <div className={styles.profileBlock}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.avatar}>
              <div className={styles.contImg}>
                <img src="https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg" alt=""/>
              </div>
              <span className={styles.number}>1</span>
            </div>
          </div>
          <div className={styles.right}>
            <span className={styles.name}>MetaVxnn <CheckIcon /></span>
            <span className={styles.description}>хикикомоэ. соцсетки с рисунками и портфолио </span>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
          <div className={styles.rightMobile}>
            <span className={styles.name}>MetaVxnn <CheckIcon /></span>
            <span className={styles.description}>хикикомоэ. соцсетки с рисунками и портфолио </span>
          </div>
          <div className={styles.followMobile}>
            <Button type={'primary'}>Подписаться</Button>
            <Dots />
          </div>
            <div className={styles.headers}>
            <span className={styles.subtitle}>
              <Trand />
              1232
            </span>
              <span className={styles.subs}>
              699 подписчиков
            </span>
            </div>
            <div>На проекте с 12 фев 2021</div>
            <ul ref={menuRef} className={styles.navigation}>
              {
                data.map((item : any, index : number) => {
                  return (
                    <Tabs key={index} onClick={() => changePage(index)} current={active == index}>{item.title}</Tabs>
                  )
                })
              }
            </ul>
          </div>
          <div className={styles.right}>
            <Dots />
            <Button type={'primary'}>Подписаться</Button>
          </div>
        </div>
      </div>
      {
        showFixedMenu &&
        <div className={styles.profileBlockFixed}>
          <div className={styles.topHeader}>
            <div className={styles.header}>
              <div className={styles.left}>
                <div className={styles.avatar}>
                  <div className={styles.contImg}>
                    <img src="https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg" alt=""/>
                  </div>
                  <span className={styles.number}>1</span>
                </div>
              </div>
              <ul className={styles.right}>
                <span className={styles.name}>MetaVxnn <CheckIcon /></span>
              </ul>
            </div>
            <div>
              <Button type={'primary'}>Подписаться</Button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProfileBlock;
