import React, {useState} from 'react';
import styles from './UserItem.module.scss'
import CheckIcon from "../../../../../public/img/svg/CheckIcon";
import Trand from "../../../../../public/img/svg/Trand";
import Plus from "../../../../../public/img/svg/Plus";
import Image from 'next/image'

const UserItem = ({data, index, get, set} : any) => {

  const [anim, setAnim] = useState(false)

  return (
    <div
      onMouseEnter={() => {set(index)}}
      className={`${styles.item} ${get === index && data.images && styles.activeItem}`}>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.avatar}>
            <div className={styles.images}>
              <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
            </div>
            <span className={styles.number}>{data.number}</span>
          </div>
          <span className={styles.name}>{data.name} <CheckIcon /></span>
        </div>
        {
          data.rating ? (
            <span className={styles.rating}><Trand /> {data.rating}</span>
          ) : (
            <span className={styles.add}><Plus /> {data.rating}</span>
          )
        }
      </header>
      {
        data.images && (
          <div className={styles.images}>
            {
              data.images.map((item: any, index: number) => {
                return (
                  <div key={index} className={styles.contImg}>
                    <Image layout={'fill'} className={styles.img} src={item} alt=""/>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>
  );
};

export default UserItem;
