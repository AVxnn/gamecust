import React from 'react';
import styles from './Tag.module.scss'
import Fire from '../../../../public/img/svg/Fire'

const Tag = ({data} : any) => {

  const createTag = () => {
    switch (data.type) {
      case 'popular':
        return (
          <div className={`${styles.tag} ${styles.important}`}>
            <Fire />{data.text}
          </div>
        )
      case 'postDay':
        return (
          <div className={`${styles.tag} ${styles.postDay}`}>
            {data.text}
          </div>
        )
    }
  }
  
  return (
    <div className={styles.tag}>
      {createTag()}
    </div>
  );
};

export default Tag;
