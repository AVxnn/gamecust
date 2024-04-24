import React, { useContext, useEffect, useState } from "react";
import styles from "./NotificationSettingsBlock.module.scss";
import { useRouter } from "next/navigation";
import Arrow from "../../../../public/img/svg/Arrow";
import NewInput from "../ProfileBlock/ui/NewInput";
import Link from "next/link";
import NewDropMenu from "../ProfileBlock/ui/NewDropMenu";
import { observer } from "mobx-react-lite";
import TitleCard from "../ProfileBlock/ui/TitleCard";
import { Context } from "../../../../app/(pages)/layout";
import Check from "../../../ui/Check";

const NotificationSettingsBlock = () => {
  const router = useRouter();

  const { mobxStore } = useContext(Context);

  const [email, setEmail] = useState(mobxStore?.user?.email);
  const [mainColor, setMainColor] = useState();

  const saveHandler = () => {
    mobxStore.reSaveUser({ id: mobxStore.user.id });
  };

  return (
    mobxStore.user && (
      <div className={styles.container}>
        <TitleCard title={"Уведомления"} />
        <div className={styles.mainBlocks}>
          <div className={styles.first}>
            <p className={styles.title}>Уведомления на сайте</p>
            <Check text="Ответы на мои комментарии" />
            <Check text="Новые сообщения" />
            <Check text="Новые подписчики" />
            <Check text="Оценки постов и комментариев" />
          </div>
          <button onClick={() => saveHandler()} className={styles.buttonCustom}>
            Сохранить
          </button>
        </div>
      </div>
    )
  );
};

export default observer(NotificationSettingsBlock);
