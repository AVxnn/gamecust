import React from 'react';
import styles from './Tag.module.scss'
import Fire from '../../../../public/img/svg/Fire'

const Tag = ({children, popular, postDay} : any) => {
  if (popular) {
    return (
      <div className={`${styles.tag} ${styles.important}`}>
        <Fire />{children}
      </div>
    )
  } else if (postDay) {
    return (
      <div className={`${styles.tag} ${styles.postDay}`}>
        {children}
      </div>
    )
  }
  return (
    <div className={styles.tag}>
      {children}
    </div>
  );
};

export default Tag;
