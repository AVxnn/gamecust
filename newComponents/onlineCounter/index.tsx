import React, { useContext, useEffect, useState } from "react";
import styles from "./onlineCounter.module.scss";
import socket from "../../utils/socket/socketPost";
import { Context } from "../../app/(pages)/layout";

const OnlineCounter = () => {
  const { mobxStore } = useContext(Context);
  const [online, setOnline] = useState([]) as any;

  useEffect(() => {
    if (mobxStore.user) {
      socket.emit("addNewUser", mobxStore.user.id);
      socket.on("getOnlineUsers", (res) => {
        setOnline(res);
      });
    }
  }, [mobxStore.user]);

  return <div className={styles.counter}>Сейчас онлайн: {online.length}</div>;
};

export default OnlineCounter;
