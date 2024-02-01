import React from "react";
import ReactPlayer from "react-player";
import styles from "./video.module.scss";

const Video = ({ href }: any) => {
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
        url={href}
      />
    </div>
  );
};

export default Video;
