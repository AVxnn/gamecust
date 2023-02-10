import React from 'react';
import styles from './BackWallpaper.module.scss'
import Image from 'next/image'

const BackWallpaper = ({data} : any) => {
  return (
    <div className={styles.backWallpaper}>
      <div className={styles.imgCont}>
        <Image layout={'fill'} src="https://www.pixelstalk.net/wp-content/uploads/images6/4K-Anime-Wallpaper-Desktop-1.jpg" alt=""/>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default BackWallpaper;
