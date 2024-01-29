import React, { useContext } from "react";
import styles from "./ToolBar.module.scss";
import Button from "../../../common/Button";
import Dots from "../../../../../public/img/svg/Dots";
import Check from "../../../../../public/img/svg/Check";
import { useRouter } from "next/navigation";
import { Context } from "../../../../../app/(pages)/layout";

const ToolBar = ({ pressKey }: any) => {
  const { mobxStore, postCreateStore, notificationStore } = useContext(Context);
  const router = useRouter();
  const submitHandler = () => {
    if (localStorage.getItem("token")) {
      mobxStore.checkAuth();
    }
    notificationStore.addItem({
      title: "Пост опубликован",
      status: "success",
      timeLife: 2500,
    });
    router.push("/");
    postCreateStore.createPost(
      mobxStore.user,
      postCreateStore.getPost(),
      `${postCreateStore.postId}`
    );
  };

  return (
    <div className={styles.toolBar}>
      <div className={styles.left}>
        <Button clb={submitHandler} type={"primary"} size={"big"}>
          Опубликовать
        </Button>
        <Dots />
      </div>
      <div className={styles.right}>
        {!pressKey ? (
          <>
            <span className={styles.save}>Сохранено</span>
            <Check />
          </>
        ) : (
          <>
            <span className={styles.save}>Сохранение</span>
            <span className={styles.loader}></span>
          </>
        )}
      </div>
    </div>
  );
};

export default ToolBar;
