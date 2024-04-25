"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./ProfileBlock.module.scss";
import NewInput from "./ui/NewInput";
import NewDropMenu from "./ui/NewDropMenu";
import AvatarChanger from "./ui/AvatarChanger";
import TitleCard from "./ui/TitleCard";
import { Context } from "../../../../app/(pages)/layout";
import { observer } from "mobx-react-lite";
import TextArea from "./ui/TextArea";
import StatusBarChanger from "./ui/StatusBarChanger";

const ProfileBlock = () => {
  const { mobxStore, notificationStore } = useContext(Context);

  const [username, setUsername] = useState(mobxStore.user.username);
  const [website, setWebsite] = useState(mobxStore.user.website);
  const [description, setDescription] = useState(mobxStore.user.description);
  const [avatarPath, setAvatarPath] = useState(mobxStore.user.avatarPath);
  const [privateBlog, setPrivate] = useState(mobxStore.user.private) as any;

  const saveHandler = () => {
    mobxStore.reSaveUser({
      id: mobxStore.user.id,
      username: username,
      website: website,
      avatarPath: avatarPath,
      description: description,
      private: privateBlog,
    });
    notificationStore.addItem({
      title: "Изменения сохранены",
      status: "success",
      timeLife: 2500,
    });
  };

  let dataBlog = [
    {
      value: "Показывать всем",
      type: "all",
    },
    {
      value: "Скрывать от всех",
      type: "hide",
    },
  ];
  useEffect(() => {
    if (mobxStore.user.id) {
      setUsername(mobxStore.user.username);
      setDescription(mobxStore.user.description);
      setAvatarPath(mobxStore.user.avatarPath);
      setWebsite(mobxStore.user.website);
      setPrivate(mobxStore.user.private);
    }
  }, [
    mobxStore,
    mobxStore.user,
    mobxStore.user.avatarPath,
    mobxStore.user.description,
    mobxStore.user.id,
    mobxStore.user.private,
    mobxStore.user.username,
    mobxStore.user.website,
  ]);

  return mobxStore.user.email ? (
    <div className={styles.container}>
      <TitleCard title={"Профиль"} />
      <div className={styles.mainBlocks}>
        <NewInput
          title={"Отображаемое имя"}
          value={username}
          setValue={setUsername}
          maxValue={24}
        />
        <TextArea
          title={"Описание к блогу"}
          value={description}
          setValue={setDescription}
        />
        <NewInput
          title={"Веб-сайт"}
          value={website}
          setValue={setWebsite}
          maxValue={100}
        />
        <StatusBarChanger />
        <NewDropMenu
          data={dataBlog}
          title={"Записи в блоге"}
          value={privateBlog}
          setValue={setPrivate}
        />
        <button onClick={() => saveHandler()} className={styles.buttonCustom}>
          Сохранить
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default observer(ProfileBlock);
