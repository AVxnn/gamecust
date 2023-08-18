import React, {useContext, useEffect, useRef, useState} from 'react';
import Tabs from "../../common/Tabs";
import styles from './Navigation.module.scss'
import { useRouter } from 'next/router';
import { Context } from '../../../../pages/_app';
import { observer } from 'mobx-react';

const Navigation = () => {

  const [active, setActive] = useState(0)
  const router = useRouter();

  const {mobxStore} = useContext(Context) as any;

  const changePage = (index : number) => {
    setActive(index)
  }
  console.log(mobxStore);
  
  let data = [
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
      link: `/subscriptions`
    }
  ]

  useEffect(() => {
    switch (router.asPath) {
        case '/':
            setActive(0);
            break;
        case '/new':
            setActive(1);
            break;
        case `/subscriptions`:
            setActive(2);
            break;
        default:
            setActive(0);
            break;
    }
    
}, [router]);

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

export default observer(Navigation);
