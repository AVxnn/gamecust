import React, {useContext, useState} from 'react';
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

function preloader() {
  return (
      <ContentLoader  viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="32" />
      </ContentLoader>
  )
}

const HeaderPost = ({data} : any) => {
  
  const {mobxStore, postCreateStore} = useContext(Context);
  const [subscribe, setSubscribe] = useState(false)

  const changeSub = () => {
    mobxStore.updateAuth(data.userId, mobxStore.user.id);
    setSubscribe(!subscribe)
  }

  const timestamp = data.publishedDate ? new Date(data.publishedDate) : '' as any
  console.log(timestamp);
  
  return (
    <header className={styles.header}>
      <div className={styles.leftBlock}>
        <Link href={`/profile/${data.username}`}>
          <ImageLoader
              className={styles.avatar}
              src="https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg"
              wrapper={React.createFactory('div')}
              preloader={preloader}>
            Image load failed!
          </ImageLoader>
        </Link>
        <span className={styles.name}>{data.username} <CheckIcon /></span>
        <span className={styles.date}>{formatDistance(new Date(data.publishedDate), Date.now(), { addSuffix: true, locale: ru })}</span>
      </div>
      {
        isRoleHandler(mobxStore.user.id, data.userId) ? ( 
          <EditBlock postId={data.postId} />
        ) : subscribe ? (
          <Button clb={() => changeSub()} type={'primary'}>
            Подписаться
          </Button>
        ) : (
          <Button clb={() => changeSub()} type={'primary'}>
            Подписаны
          </Button>
        )
      }

    </header>
  );
};

export default HeaderPost;
