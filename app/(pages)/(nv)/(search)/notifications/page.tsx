"use client";

import React from "react";
import styles from "./notifications.module.scss";
import NotificationList from "../../../../../components/legendary/Lists/NotificationList";
import { observer } from "mobx-react-lite";
import NotificationSettingDrop from "../../../../../components/legendary/common/NotificationSettingDrop";

const PageNotifications = (props: any) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p className={styles.title}>Уведомления</p>
        <NotificationSettingDrop />
      </div>
      <NotificationList />
    </div>
  );
};

export default observer(PageNotifications);
