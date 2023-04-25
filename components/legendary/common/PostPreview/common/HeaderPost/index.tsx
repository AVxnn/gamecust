import React, {useState} from 'react';
import styles from './HeaderPost.module.scss'
import CheckIcon from "../../../../../../public/img/svg/CheckIcon";
import Button from "../../../Button";
import Link from "next/link";
import ImageLoader from 'react-imageloader';
import ContentLoader from "react-content-loader";
import button from "../../../Button";
function preloader() {
  return (
      <ContentLoader  viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="32" />
      </ContentLoader>
  )
}
const HeaderPost = ({data} : any) => {

  const [subscribe, setSubscribe] = useState(false)

  const changeSub = () => {
    setSubscribe(!subscribe)
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftBlock}>
        <Link href={'/profile/metavxnn'}>
          <ImageLoader
              className={styles.avatar}
              src="https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg"
              wrapper={React.createFactory('div')}
              preloader={preloader}>
            Image load failed!
          </ImageLoader>
        </Link>
        <span className={styles.name}>{data.name} <CheckIcon /></span>
        <span className={styles.date}>3  часа</span>
      </div>
      {
        subscribe ? (
          <Button clb={() => changeSub()} type={'primary'}>
            Подписаны
          </Button>
        ) : (
          <Button clb={() => changeSub()} type={'primary'}>
            Подписаться
          </Button>
        )
      }

    </header>
  );
};

export default HeaderPost;
