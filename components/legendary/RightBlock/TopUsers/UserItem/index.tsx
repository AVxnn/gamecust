import React, {useState} from 'react';
import styles from './UserItem.module.scss'
import CheckIcon from "../../../../../public/img/svg/CheckIcon";
import Trand from "../../../../../public/img/svg/Trand";
import Plus from "../../../../../public/img/svg/Plus";
import Image from 'next/image'
import { checkColor, checkLevel } from '../../../../../newComponents/componentColors/checkColor';

const UserItem = ({data, index, get, set} : any) => {

  const [anim, setAnim] = useState(false)

  return (
    <div
      onMouseEnter={() => {set(index)}}
      className={`${styles.item} ${get === index && data.images && styles.activeItem}`}>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.avatar}>
            <div style={{ borderColor: checkColor(data.level).color}} className={styles.images}>
              <Image layout={'fill'} src={data.avatarPath} alt="ads"/>
            </div>
            <span style={{ backgroundColor: checkColor(data.level).color}} className={styles.number}>{checkLevel(data.exp)?.lvl}</span>
          </div>
          <span className={styles.name}>{data.username} <CheckIcon /></span>
        </div>
        {
          data.level >= 0 ? (
            <span className={styles.rating}><Trand /> {data.exp}</span>
          ) : (
            <span className={styles.add}><Plus /></span>
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
