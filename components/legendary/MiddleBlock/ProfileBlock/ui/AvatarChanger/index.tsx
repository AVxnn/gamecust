import React, { useCallback, useContext, useState } from "react";
import styles from "./AvatarChanger.module.scss";
import Image from "next/image";
import Button from "../../../../common/Button";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../../../app/(pages)/layout";

const AvatarChanger = ({ setValue }: any) => {
  const { mobxStore } = useContext(Context);

  const [avatar, setAvatar] = useState() as any;

  const sendData = (file: any, type: any) => {
    let files = file.currentTarget.files[0];
    if (mobxStore.user.avatarPath) {
      const regex = /\/(?:[^/]*\/){3}(.+)/;
      const link = mobxStore.user.avatarPath as any;
      const match = link.match(regex)[1];
      var formdataDelete = new FormData();
      formdataDelete.append("pathUrl", match);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/file/deleteAvatar`, {
        method: "POST",
        body: formdataDelete,
        redirect: "follow",
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log("error", error));
    }
    if (type === "drag") {
      files = file.dataTransfer.files[0];
    }
    var formdata = new FormData();
    formdata.append("image", files);
    formdata.append("id", "12312312312");
    setAvatar(files);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/file/uploadAvatar`, {
      method: "POST",
      body: formdata,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => {
        setValue(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
    mobxStore.deleteAvatar({ pathUrl: mobxStore.user.avatarPath });
  };

  return (
    mobxStore.user && (
      <div className={styles.avatarChanger}>
        {/* {
                avatar.imgSrc && (
                    <PopupCrop avatar={avatar.imgSrc} />
                )
            } */}
        {avatar ? (
          <div className={styles.avatar}>
            <Image layout={"fill"} src={URL.createObjectURL(avatar)} alt={""} />
          </div>
        ) : (
          <div className={styles.avatar}>
            <Image
              layout={"fill"}
              src={`${mobxStore.user.avatarPath}`}
              alt={""}
            />
          </div>
        )}

        <div className={styles.buttons}>
          <label htmlFor={"img"} className={styles.info}>
            <div className={styles.button}>Изменить аватарку</div>
            <input
              multiple={true}
              onChange={(e) => sendData(e, "click")}
              className={styles.file}
              type="file"
              id="img"
              name="img"
              accept="image/*"
            />
          </label>
          <div className={styles.button}>Изменить рамку</div>
        </div>
      </div>
    )
  );
};

export default observer(AvatarChanger);
