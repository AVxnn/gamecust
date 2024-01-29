import React, { useContext, useState } from "react";
import styles from "./bgProfilePopup.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ImageAdd from "../../../../public/img/svg/ImageAdd";
import { Context } from "../../../../app/(pages)/layout";
import isRoleHandler from "../../../../features/isRoleHandler";
import { useParams } from "next/navigation";
import bgimage from "../../../../public/img/bgimage.png";

const BgProfilePopup = ({ src }: any) => {
  const [isHover, setIsHover] = useState(false) as any;

  const [avatar, setAvatar] = useState("") as any;
  const { postCreateStore, mobxStore } = useContext(Context);
  const path = useParams() as any;

  const sendData = async (file: any, type: any) => {
    let files = file.currentTarget.files[0];
    console.log("w" + mobxStore.user.bgPath);
    if (mobxStore.user.bgPath) {
      const regex = /\/(?:[^/]*\/){3}(.+)/;
      const link = mobxStore.user.bgPath as any;
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
    console.log(files);
    setAvatar(files);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/file/uploadAvatar`, {
      method: "POST",
      body: formdata,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        resave(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
    mobxStore.deleteAvatar({ pathUrl: mobxStore.user.bgPath });
  };

  const resave = (result: any) => {
    mobxStore.reSaveUser({
      id: mobxStore.user.id,
      bgPath: result,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={styles.containerAvatar}
        >
          {avatar ? (
            <div className={styles.avatar}>
              <Image
                className={styles.imageCont}
                layout={"fill"}
                src={URL.createObjectURL(avatar)}
                alt={""}
              />
            </div>
          ) : (
            <Image layout={"fill"} src={src || bgimage} alt={"bg"} />
          )}
        </div>
        {isRoleHandler(path.uid, mobxStore.user.id) && (
          <AnimatePresence initial={false} mode="wait">
            {isHover && (
              <label htmlFor={"img"} className={styles.info}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  onMouseLeave={() => setIsHover(false)}
                  onMouseEnter={() => setIsHover(true)}
                  className={styles.camera}
                >
                  <ImageAdd />
                </motion.div>
                <input
                  multiple={true}
                  onChange={(e) => sendData(e, "input")}
                  className={styles.file}
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                />
              </label>
            )}
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default BgProfilePopup;
