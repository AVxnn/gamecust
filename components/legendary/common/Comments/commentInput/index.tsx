import React, { useState } from "react";
import Button from "../../Button";
import ImageAdd from "../../../../../public/img/svg/ImageAdd";
import styles from "./commentInput.module.scss";
import Zoom from "react-medium-image-zoom";
import Trash from "../../../../../public/img/svg/Trash";

const CommentInput = ({
  callback,
  type,
  setValue,
  unicId,
  value,
  setIsOpen,
  setImage,
}: any) => {
  const [focus, setFocus] = useState(false);

  const [imageURL, setImageURL] = useState("") as any;
  const [dragActive, setDragActive] = useState(false);

  const handlePaste = (event: any) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData)
      .items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf("image") !== -1) {
        const blob = item.getAsFile();
        setImage(blob);
        const reader = new FileReader();

        reader.onload = () => {
          const url = reader.result;
          setImageURL(url);
        };

        reader.readAsDataURL(blob);
        break; // Останавливаемся после первого изображения
      }
    }
  };

  const sendData = (file: any, type: any) => {
    let files;
    if (type === "input") {
      files = file.currentTarget.files[0];
    }
    if (type === "drag") {
      files = file.dataTransfer.files[0];
    }
    if (type === "paste") {
      files = file;
    }
    setImage(files);
    const reader = new FileReader();

    reader.onload = () => {
      const url = reader.result;
      setImageURL(url);
    };
    console.log(imageURL, files);
    reader.readAsDataURL(files);
  };

  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    console.log("rere");

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleSend = () => {
    setImageURL("");
    callback();
  };

  const deleteImage = () => {
    setImageURL("");
  };

  return (
    <label htmlFor={unicId}>
      <div className={`${styles.comments} ${focus && styles.active}`}>
        <form id={"form"} onSubmit={callback}>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onPaste={handlePaste}
            value={value}
            id={unicId}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder={"Оставьте свой комментарий!"}
          />
          <div className={styles.footer}>
            <div className={styles.left}>
              {imageURL ? (
                <div className={styles.photo}>
                  <Zoom>
                    <img src={imageURL} alt="img" />
                  </Zoom>
                  <div className={styles.trash} onClick={() => deleteImage()}>
                    <Trash />
                  </div>
                </div>
              ) : (
                <label htmlFor={unicId + "1"} className={styles.info}>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    onDragEnter={handleDrag}
                    className={styles.fileBlock}
                  >
                    <div className={styles.icon}>
                      <ImageAdd />
                    </div>
                    <input
                      multiple={true}
                      onChange={(e) => sendData(e, "input")}
                      className={styles.file}
                      type="file"
                      id={unicId + "1"}
                      name={unicId + "1"}
                      accept="image/*"
                    />
                  </form>
                </label>
              )}
            </div>
            <div className={styles.buttonlist}>
              {type === "reply" && (
                <Button
                  clb={() => setIsOpen(false)}
                  type={"secondary"}
                  size={"small"}
                >
                  Отмена
                </Button>
              )}
              {value && (
                <Button clb={handleSend} type={"primary"} size={"small"}>
                  Отправить
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </label>
  );
};

export default CommentInput;
