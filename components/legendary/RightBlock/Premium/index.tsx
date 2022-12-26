import React from 'react';
import styles from './Premium.module.scss'
import Button from "../../common/Button";

const Premium = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.promoImg}>
        <h4 className={styles.title}>75Р</h4>
        <p className={styles.subtitle}>в месяц за доступ к приятным функциям</p>
      </div>
      <div className={styles.container}>
        <Button type={'primary'} full={true} size={''}>Попробовать</Button>
      </div>
    </div>
  );
};

export default Premium;
