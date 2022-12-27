import React from 'react';
import styles from './BackWallpaper.module.scss'

const BackWallpaper = ({data} : any) => {
  return (
    <div className={styles.backWallpaper}>
      <img src="https://www.pixelstalk.net/wp-content/uploads/images6/4K-Anime-Wallpaper-Desktop-1.jpg" alt=""/>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default BackWallpaper;
