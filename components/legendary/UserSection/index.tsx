import React from 'react';
import styles from './UserSection.module.scss'
import Arrow from '../../../public/img/svg/Arrow'
import Trand from '../../../public/img/svg/Trand'

const UserSection = () => {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
      </div>
      <div className={styles.info}>
        <h4 className={styles.name}>MetaVxnn</h4>
        <span className={styles.subtitle}>
          <Trand />
          1232
        </span>
      </div>
      <div className={styles.arrowDown}>
        <Arrow />
      </div>
    </div>
  );
};

export default UserSection;
