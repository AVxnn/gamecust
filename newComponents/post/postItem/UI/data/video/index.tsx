import React from "react";
import ReactPlayer from "react-player";
import styles from "./video.module.scss";
import Spoiler from "../../Spoiler";

const Video = ({ item }: any) => {
  return (
    <div className={styles.mediaBlock}>
      <ReactPlayer
        pip={false}
        width="100%"
        className={styles.player}
        controls={true}
        loop={true}
        playsinline={true}
        muted={true}
        lazy={true}
        playing={true}
        url={item?.href}
      />
      <Spoiler item={item}/>
    </div>
  );
};

export default Video;
