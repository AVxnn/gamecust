import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './Profile.module.scss'
import CheckIcon from "../../../../public/img/svg/CheckIcon";
import Tabs from "../../common/Tabs";
import ButtonChanger from './ui/ButtonChanger';
import { useRouter } from 'next/router';
import { Context } from '../../../../pages/_app';
import { observer } from 'mobx-react';

const dataTag = [
  {
    title: 'Статьи',
    link: 'entries'
  },
  {
    title: 'Комментарии',
    link: 'comments'
  },
  {
    title: 'Черновики',
    link: 'drafts'
  }
]

const dataTagAccount = [
  {
    title: 'Статьи',
    link: 'entries'
  },
  {
    title: 'Комментарии',
    link: 'comments'
  }
]

const ProfileBlock = ({data} : any) => {
  const [active, setActive] = useState(0)
  const menuRef = useRef<HTMLUListElement>(null);
  const {mobxStore} = useContext(Context);
  const router = useRouter() as any

  const changePage = (index : number) => {
    setActive(index)
  }
  
  useEffect(() => {
    switch (router.query.id[1]) {
      case 'entries':
        return setActive(0)
      case 'comments':
        return setActive(1)
      case 'drafts':
        return setActive(2)
      default:
        return setActive(0)
    }
  }, [router])
  
  return (
    <>
      <div className={styles.profileBlock}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.avatar}>
              <div className={styles.contImg}>
                <img src={`${process.env.NEXT_PUBLIC_AVATARS_URL}${data.avatarPath}`} alt=""/>
              </div>
            </div>
          </div>
          <div className={styles.rightText}>
          {
              data && (
                <>
                  <span className={styles.name}>{data.username}<CheckIcon /></span>
                  <span className={styles.description}>{data?.description}</span>
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
                  <span className={styles.description}>{data?.description}</span>
                </>
              )
            }
          </div>
            <div className={styles.headers}>
            <span className={styles.lvl}>
              Ур. 2
            </span>
            <span className={styles.subs}>
              {data.subscribers ? data.subscribers.length : 0} подписчиков
            </span>
            </div>
            <div className={styles.date}>На проекте с 12 фев 2021</div>
            <ul ref={menuRef} className={styles.navigation}>
              {
                mobxStore.user.id === data._id ? dataTag.map((item : any, index : number) => {
                  return (
                    <Tabs link={`/profile/${data._id}/${item.link}`} key={index} onClick={() => changePage(index)} current={active == index}>{item.title}</Tabs>
                  )
                }) : ''
              }
              {
                mobxStore.user.id !== data._id ? dataTagAccount.map((item : any, index : number) => {
                  return (
                    <Tabs link={`/profile/${data._id}/${item.link}`} key={index} onClick={() => changePage(index)} current={active == index}>{item.title}</Tabs>
                  )
                }) : ''
              }
            </ul>
          </div>
        </div>
        <ButtonChanger />
      </div>
    </>
  );
};

export default observer(ProfileBlock);
