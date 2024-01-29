import React, { useContext } from "react";
import uuid from "react-uuid";
import styles from "./createButton.module.scss";
import { useRouter } from "next/navigation";
import { Context } from "../../app/(pages)/layout";
import Plus from "../../public/img/svg/Plus";

const CreateButton = () => {
  const { mobxStore, notificationStore, popupHandlers } = useContext(Context);

  const router = useRouter();

  const redirectLink = (link: string) => {
    if (!mobxStore.user.email) {
      notificationStore.addItem({
        title: "Нужно выполнить авторизацию",
        status: "error",
        timeLife: 2500,
      });
      return popupHandlers.authPopupOpen();
    }
    router.push(link);
  };

  return (
    <>
      <button
        onClick={() =>
          redirectLink(
            `/editor/${mobxStore.user.id}/${uuid()}-${mobxStore.user.username}`
          )
        }
        className={`${styles.button}`}
      >
        Новый пост
      </button>
      <button
        onClick={() =>
          redirectLink(
            `/editor/${mobxStore.user.id}/${uuid()}-${mobxStore.user.username}`
          )
        }
        className={`${styles.smallButton}`}
      >
        <Plus />
      </button>
    </>
  );
};

export default CreateButton;
