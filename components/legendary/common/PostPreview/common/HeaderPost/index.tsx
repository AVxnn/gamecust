import React, {useContext, useEffect, useState} from 'react';
import styles from './HeaderPost.module.scss'
import CheckIcon from "../../../../../../public/img/svg/CheckIcon";
import Button from "../../../Button";
import Link from "next/link";
import ImageLoader from 'react-imageloader';
import ContentLoader from "react-content-loader";
import { Context } from '../../../../../../pages/_app';
import isRoleHandler from '../../../../../../features/isRoleHandler';
import EditBlock from './EditBlock';
import { formatDistance, subDays } from 'date-fns'
import { ru } from 'date-fns/locale';
import { useDispatch } from 'react-redux';
import {open} from '../../../../../../features/Popup/PopupAuthSlice'
import { observer } from 'mobx-react';

function preloader() {
  return (
      <ContentLoader  viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="32" />
      </ContentLoader>
  )
}

const HeaderPost = ({data, user} : any) => {
  
  const {mobxStore, popupHandlers, notificationStore} = useContext(Context);
  const [subscribe, setSubscribe] = useState(false)

  const changeSub = async () => {
    if(!mobxStore.user.email) {
      notificationStore.addItem({title: 'Нужно выполнить авторизацию', status: 'error', timeLife: 2500})
      return popupHandlers.authPopupOpen()
    }
    let res = await mobxStore.updateAuth(data.userId, mobxStore.user.id);
    setSubscribe(!subscribe)
  }

  useEffect(() => {
    mobxStore?.user?.subscriptions?.map((item) => {
      if (item == data.id) {
        setSubscribe(true)
      } else {
        setSubscribe(false)
      }
    })
  }, [mobxStore?.user?.subscriptions]);
  
  return (
    <header className={styles.header}>
      <div className={styles.leftBlock}>
        <Link href={`/profile/${data.userId}`}>
          {
            data?.userAvatar ? (
              <ImageLoader
                  className={styles.avatar}
                  src={`${process.env.NEXT_PUBLIC_AVATARS_URL}${data?.userAvatar}`}
                  wrapper={React.createFactory('div')}
                  preloader={preloader}>
              </ImageLoader>
            ) : (
              <div className={styles.avatarBg}></div>
            )
          }
          <div className={styles.info}>
            <span className={styles.name}>{data?.username} <CheckIcon /></span>
            <span className={styles.date}>{formatDistance(+data.publishedDate, Date.now(), { addSuffix: true, locale: ru })}</span>
          </div>
        </Link>
      </div>
      {
        isRoleHandler(mobxStore?.user?.id, data.userId) ? ( 
          <EditBlock postId={data.postId} />
        ) : mobxStore?.user?.subscriptions?.filter((e) => e === data.userId).length ? (
          <Button clb={() => changeSub()} type={'primary'}>
            Отписаться
          </Button>
        ) : (
          <Button clb={() => changeSub()} type={'primary'}>
            Подписаться
          </Button>
        )
      }

    </header>
  )
};

export default observer(HeaderPost);
