import React, {useState} from 'react';
import styles from './TopGroup.module.scss'
import UserItem from "../TopUsers/UserItem";

const data = [
  {
    name: 'Dota 2',
    number: 1,
    link: '/',
  },
  {
    name: 'CS:GO',
    number: 2,
    link: '/',
  },
  {
    name: 'FrontWars',
    number: 3,
    link: '/',
  },
  {
    name: 'Genshin Impact',
    number: 4,
    link: '/',
  },
  {
    name: 'Minecraft',
    number: 5,
    link: '/',
  },
  {
    name: 'Anime',
    number: 6,
    link: '/',
  },
]

const TopGroup = () => {

  const [active, setActive] = useState(0)

  return (
    <div className={styles.topGroup}>
      <h3 className={styles.title}>Топ сообществ</h3>
      <div className={styles.list}>
        {
          data.map((item : any, index : number) => {
            return (
              <UserItem key={index} index={index} get={active} set={setActive} data={item}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default TopGroup;
