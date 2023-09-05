import React from 'react';
import styles from './Item.module.scss'
import ToolComment from "../ToolComment";
import ImgPopup from "../../ImgPopup";
import Image from 'next/image'
import { formatDistance } from 'date-fns'
import { ru } from 'date-fns/locale';
import IconHandler from '../../PostPreview/common/IconHandler';
import Link from 'next/link';

const Item = ({data} : any) => {
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.topBlock}>
          <div className={styles.avatar}>
            <Link href={`/profile/${data.userId}`}>
              <Image layout={'fill'} src={`${data.AvatarPath}`} alt="ads"/>
            </Link>
          </div>
          <div className={styles.rightInfo}>
            <Link href={`/profile/${data.userId}`}>
              <span className={styles.name}>{data.author} <IconHandler user={data} /></span>
              <span className={styles.date}>{formatDistance(+data.createdAt, Date.now(), { addSuffix: true, locale: ru })}</span>
            </Link>
            <div className={styles.content}>
              <p className={styles.text}>{data.text}</p>
              {
                data.img && (
                  <div className={styles.img}>
                    <ImgPopup data={data}/>
                  </div>
                )
              }
            </div>
            <ToolComment data={{views: 324, count: 121, comments: 32}}/>
          </div>
        </div>
        {
          data.reply && data.reply.map((item: any, index: number) => {
            return (
              <Item data={item} key={index}/>
            )
          })
        }
      </div>
    </>
  );
};

export default Item;
