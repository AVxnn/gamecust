import React, {useEffect, useRef, useState} from 'react';
import Tabs from "../../common/Tabs";
import styles from './Navigation.module.scss'

const data = [
  {
    title: 'Рекомендовано',
    link: '/',
  },
  {
    title: 'Свежее',
    link: '/new',
  },
  {
    title: 'Подписки',
    link: '/subscribers',
  }
]

const Navigation = () => {

  const [active, setActive] = useState(0)
  const [showFixedMenu, setShowFixedMenu] = useState<boolean>(true);

  const changePage = (index : number) => {
    setActive(index)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {

        if (window.scrollY <= 6) {
          setShowFixedMenu(true)
        } else {
          setShowFixedMenu(false)
        }
      })
    }
  })


  return (
    <>
      <div className={styles.container}>
        <ul className={styles.navigation}>
          {
            data.map((item : any, index : number) => {
              return (
                <Tabs key={index} link={item.link} onClick={() => changePage(index)} current={active == index}>{item.title}</Tabs>
              )
            })
          }
        </ul>
      </div>
    </>
  );
};

export default Navigation;
