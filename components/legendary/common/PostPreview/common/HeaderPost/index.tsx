import React, {useState} from 'react';
import styles from './HeaderPost.module.scss'
import CheckIcon from "../../../../../../public/img/svg/CheckIcon";
import Button from "../../../Button";
import Link from "next/link";

const HeaderPost = ({data} : any) => {

  const [subscribe, setSubscribe] = useState(false)

  const changeSub = () => {
    setSubscribe(!subscribe)
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftBlock}>
        <Link href={'/profile/metavxnn'}>
          <img className={styles.avatar} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
        </Link>
        <span className={styles.name}>{data.name} <CheckIcon /></span>
        <span className={styles.date}>3  часа</span>
      </div>
      {
        subscribe ? (
          <Button clb={changeSub} type={'primary'} full={false} size={'small'}>
            Вы подписаны
          </Button>
        ) : (
          <Button clb={changeSub} type={'secondary'} full={false} size={'small'}>
            Подписаться
          </Button>
        )
      }

    </header>
  );
};

export default HeaderPost;
