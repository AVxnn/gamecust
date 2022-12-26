import React from 'react';
import styles from './Contacts.module.scss'
import Discord from '../../../../public/img/svg/social/Discord'
import Tg from '../../../../public/img/svg/social/Tg'
import Mail from '../../../../public/img/svg/social/Mail'
import Spotify from '../../../../public/img/svg/social/Spotify'

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h3 className={styles.title}>Контакты</h3>
      <div className={styles.item}>
        <Tg /> <a href='#'>@romashkog</a>
      </div>
      <div className={styles.item}>
        <Mail /> <a href='#'>George@thevann.ru</a>
      </div>
      <div className={styles.item}>
        <Discord /> <a href='#'>MetaVxnn#0492</a>
      </div>
      <div className={styles.item}>
        <Spotify /> <a href='https://open.spotify.com/user/14arl3k11ppigklgwaiken91c?si=4718bc5627844240'>Spotify</a>
      </div>
    </div>
  );
};

export default Contacts;
