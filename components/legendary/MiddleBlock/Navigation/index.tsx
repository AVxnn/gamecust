import React, {useEffect, useRef, useState} from 'react';
import Tabs from "../../common/Tabs";
import styles from './Navigation.module.scss'

const data = [
  {
    title: 'Рекомендации',
  },
  {
    title: 'Свежее',
  },
  {
    title: 'Подписки',
  },
  {
    title: 'Категории',
  },
]

const Navigation = () => {

  const [active, setActive] = useState(0)
  const [showFixedMenu, setShowFixedMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);


  const changePage = (index : number) => {
    setActive(index)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {

        if (menuRef.current && menuRef.current.getBoundingClientRect().top <= 0) {
          setShowFixedMenu(true)
        } else {
          setShowFixedMenu(false)
        }
      })
    }
  })


  return (
    <>
      <ul ref={menuRef} className={styles.navigation}>
        {
          data.map((item : any, index : number) => {
            return (
              <Tabs key={index} onClick={() => changePage(index)} current={active == index}>{item.title}</Tabs>
            )
          })
        }
      </ul>
      {
        showFixedMenu &&
        <div className={styles.navigationFixed}>
          <ul className={styles.navigation}>
            {
              data.map((item : any, index : number) => {
                return (
                  <Tabs key={index} onClick={() => changePage(index)} current={active == index}>{item.title}</Tabs>
                )
              })
            }
          </ul>
        </div>
      }
    </>
  );
};

export default Navigation;
