import React from "react";
import ReactPlayer from "react-player";
import styles from "./video.module.scss"

const Video = ({ href }: any) => {
  return (
    <div className={styles.mediaBlock}>
      <ReactPlayer
        pip
        width="100%"
        className={styles.player}
        controls={true}
        url={href}
      />
    </div>
  );
};

export default Video;
