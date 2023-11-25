import React, { useState } from "react";
import Button from "../../Button";
import ImageAdd from "../../../../../public/img/svg/ImageAdd";
import styles from "./commentInput.module.scss";
import Zoom from "react-medium-image-zoom";

const CommentInput = ({ callback, setValue, value, setIsOpen, setImage }: any) => {
  const [focus, setFocus] = useState(false);

  const [imageURL, setImageURL] = useState("") as any;
  const [imageData, setImageData] = useState() as any;

  const handlePaste = (event: any) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData)
      .items;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.type.indexOf("image") !== -1) {
        const blob = item.getAsFile();
        setImage(blob)
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

  return (
    <div className={`${styles.comments} ${focus && styles.active}`}>
      <form id={'form'} onSubmit={callback}>
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onPaste={handlePaste}
          value={value}
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
              </div>
            ) : (
              <div className={styles.icon}>
                <ImageAdd />
              </div>
            )}
          </div>
          <div className={styles.buttonlist}>
            <Button
              clb={() => setIsOpen(false)}
              type={"secondary"}
              size={"small"}
            >
              Отмена
            </Button>
            {value && (
              <Button clb={callback} type={"primary"} size={"small"}>
                Отправить
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
