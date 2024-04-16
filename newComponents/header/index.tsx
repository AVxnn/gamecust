import React, { useContext } from "react";
import styles from "./header.module.scss";
import Logotype from "../../components/legendary/common/Logotype";
import SearchComponent from "../search";
import UserSection from "../../components/legendary/UserSection";
import UnAuthProfile from "../../components/legendary/UnAuthProfile";
import { observer } from "mobx-react-lite";
import { Context } from "../../app/(pages)/layout";
import CreateButton from "../createButton";
import NotificationIcon from "../../components/legendary/MiddleBlock/notificationIcon";

const Header = () => {
  const { mobxStore } = useContext(Context);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.layout}>
          <div className={styles.leftColumn}>
            <Logotype />
          </div>
          <div className={styles.middleColumn}>
            <div className={styles.mLogotype}>
              <Logotype />
            </div>
            <div className={styles.mCreate}>
              <CreateButton />
            </div>
            <div className={styles.search}>
              <SearchComponent />
            </div>
          </div>
          <div className={styles.rightColumn}>
            {mobxStore?.user?.email ? (
              <div className={styles.gap}>
                <NotificationIcon />
                <UserSection />
              </div>
            ) : (
              <>{!mobxStore.isLoading && <UnAuthProfile />}</>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(Header);
