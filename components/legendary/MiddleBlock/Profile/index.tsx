import React, {useEffect, useRef, useState} from 'react';
import styles from './Profile.module.scss'
import CheckIcon from "../../../../public/img/svg/CheckIcon";
import Trand from "../../../../public/img/svg/Trand";
import Tabs from "../../common/Tabs";
import Button from "../../common/Button";
import Dots from "../../../../public/img/svg/Dots";

const dataTag = [
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

const ProfileBlock = ({data} : any) => {
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
            </div>
          </div>
          <div className={styles.rightText}>
          {
              data && (
                <>
                  <span className={styles.name}>{data.username}<CheckIcon /></span>
                  <span className={styles.description}>хикикомоэ. соцсетки с рисунками и портфолио </span>
                </>
              )
            }
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
          <div className={styles.rightMobile}>
            {
              data && (
                <>
                  <span className={styles.name}>{data.username}<CheckIcon /></span>
                  <span className={styles.description}>хикикомоэ. соцсетки с рисунками и портфолио </span>
                </>
              )
            }
          </div>
            <div className={styles.headers}>
            <span className={styles.subtitle}>
              <Trand />
              {data && data.rating}
            </span>
            <span className={styles.subs}>
              699 подписчиков
            </span>
            </div>
            <div className={styles.date}>На проекте с 12 фев 2021</div>
            <ul ref={menuRef} className={styles.navigation}>
              {
                dataTag.map((item : any, index : number) => {
                  return (
                    <Tabs key={index} onClick={() => changePage(index)} current={active == index}>{item.title}</Tabs>
                  )
                })
              }
            </ul>
          </div>
          <div className={styles.right}>
            <Dots />
            <Button type={'primary'} size={'small'}>Подписаться</Button>
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
                </div>
              </div>
              <ul className={styles.right}>
                <span className={styles.name}>MetaVxnn <CheckIcon /></span>
              </ul>
            </div>
            <div>
              <Button size='small' type={'primary'}>Подписаться</Button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProfileBlock;
