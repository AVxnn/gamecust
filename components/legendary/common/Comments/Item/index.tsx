import React from 'react';
import styles from './Item.module.scss'
import ToolComment from "../ToolComment";
import ImgPopup from "../../ImgPopup";
import Image from 'next/image'

const Item = ({data} : any) => {
  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
      </div>
      <div className={styles.rightInfo}>
        <span className={styles.name}>{data.name}</span>
        <span className={styles.date}>25  минут</span>
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
        {
          data.reply && data.reply.map((item: any, index: number) => {
            return (
              <Item data={item} key={index}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default Item;
