import React from 'react';
import styles from './UserLeftSmall.module.scss'
import Image from 'next/image'

const UserLeftSmall = () => {
  return (
    <div className={styles.userLeft}>
      <div className={styles.countImg}>
        <Image layout={'fill'} className={styles.avatar} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
      </div>
    </div>
  );
};

export default UserLeftSmall;
