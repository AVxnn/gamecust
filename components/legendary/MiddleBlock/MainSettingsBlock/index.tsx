"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./MainSettingsBlock.module.scss";
import NewInput from "../ProfileBlock/ui/NewInput";
import PremiumBlock from "./ui/PremiumBlock";
import Link from "next/link";
import NewDropMenu from "../ProfileBlock/ui/NewDropMenu";
import { observer } from "mobx-react-lite";
import TitleCard from "../ProfileBlock/ui/TitleCard";
import { Context } from "../../../../app/(pages)/layout";
import ChangeColorTheme from "./ui/ChangeColorTheme";
import ChangeColorBackground from "./ui/ChangeColorBackground";

const MainSettingsBlock = () => {
  const { mobxStore } = useContext(Context);

  const [email, setEmail] = useState(mobxStore?.user?.email);

  const saveHandler = () => {
    mobxStore.reSaveUser({ id: mobxStore.user.id });
  };

  useEffect(() => {
    setEmail(mobxStore.user.email);
  }, [mobxStore.user]);

  return (
    mobxStore.user && (
      <div className={styles.container}>
        <TitleCard title={"Основные"} />
        <div className={styles.mainBlocks}>
          <div className={styles.first}>
            <NewInput
              title={"Почта и пароль"}
              value={email}
              setValue={setEmail}
            />
            <Link href={"/"} className={styles.changePassword}>
              Изменить пароль
            </Link>
          </div>
          <ChangeColorBackground />
          <ChangeColorTheme />
          <PremiumBlock />
          <button onClick={() => saveHandler()} className={styles.buttonCustom}>
            Сохранить
          </button>
        </div>
      </div>
    )
  );
};

export default observer(MainSettingsBlock);
