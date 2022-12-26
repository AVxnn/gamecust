import React, {useState} from 'react';
import styles from './TopUsers.module.scss'
import UserItem from "./UserItem";

const TopUsers = () => {

  const [active, setActive] = useState(0)

  const data = [
    {
      name: 'MetaVxnn',
      number: 1,
      rating: 1500,
      images: ['https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg',
              'https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg',
              'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/km5shziugh7xrtkhgcjp.jpg']
    },
    {
      name: 'Arturka228',
      number: 2,
      rating: 1400,
      images: ['https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg',
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/km5shziugh7xrtkhgcjp.jpg']
    },
    {
      name: 'Vitalisa92',
      number: 3,
      rating: 1200,
      images: ['https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg',
        'https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg',
        'https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg']
    },
    {
      name: 'FKSJjw21',
      number: 4,
      rating: 1100,
      images: ['https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg',
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/km5shziugh7xrtkhgcjp.jpg']
    },
    {
      name: 'Abobka69',
      number: 5,
      rating: 500,
      images: ['https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg',
        'https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg',
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/km5shziugh7xrtkhgcjp.jpg']
    },
  ]

  return (
    <div className={styles.topUsers}>
      <h3 className={styles.title}>Топ пользователей</h3>
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

export default TopUsers;
