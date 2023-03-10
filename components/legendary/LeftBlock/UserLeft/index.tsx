import React from 'react';
import styles from './UserLeft.module.scss'
import avatar from '../../../../public/img/avatar.png'
import Image from 'next/image'

const UserLeft = () => {
  return (
    <div className={styles.userLeft}>
      <div className={styles.imgCont}>
        <Image layout={'fill'} className={styles.avatar} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
      </div>
      <span className={styles.name}>MetaVxnn</span>
    </div>
  );
};

export default UserLeft;
