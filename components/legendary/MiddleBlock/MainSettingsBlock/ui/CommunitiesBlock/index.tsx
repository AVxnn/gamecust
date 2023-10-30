import React from "react";
import styles from "./CommunitiesBlock.module.scss";
import CreateNewCommunities from "./ui/CreateNewCommunities";
import FirstBlockComm from "./ui/FirstBlockComm";
import ItemCommunities from "./ui/ItemCommunities";

const CommunitiesBlock = () => {
  return (
    <div className={styles.communities}>
      <h4 className={styles.title}>Ваши сообщества</h4>
      <div className={styles.listComm}>
        <ItemCommunities />
        <FirstBlockComm />
        <CreateNewCommunities />
      </div>
    </div>
  );
};

export default CommunitiesBlock;
