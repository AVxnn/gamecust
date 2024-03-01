import React, { useContext, useState } from "react";
import styles from "./ToolComment.module.scss";
import Dots from "../../../../../public/img/svg/Dots";
import TextareaAutosize from "react-textarea-autosize";
import ImageAdd from "../../../../../public/img/svg/ImageAdd";
import Smile from "../../../../../public/img/svg/Smile";
import Button from "../../Button";
import uuid from "react-uuid";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../../app/(pages)/layout";
import CommentInput from "../commentInput";
import { addImageComment } from "../../../../../features/new/addImageComment/addImageComment";
import getCommentsId from "../../../../../features/new/getCommentsId/getCommentsId";

const ToolComment = ({ data, dataPost, getNewComments }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState("");
  const [image, setImage] = useState();

  const { mobxStore, postCreateStore, notificationStore, commentsCreateStore } =
    useContext(Context);

  const replyComment = async (event: any) => {
    event.preventDefault();
    if (value) {
      let commentsNow = await getCommentsId(mobxStore.user.id);
      if (
        commentsNow.length <= 3 ||
        mobxStore.user.roles.filter((role) => role === "admin")
      ) {
        if (dataPost.data.length && mobxStore.user.id) {
          let link;
          if (image) {
            link = await addImageComment(image);
          }
          await commentsCreateStore.createComment(
            mobxStore.user,
            {
              text: value,
              image: link ? link : "",
              createdAt: new Date(),
              postId: dataPost.postId,
              receiver: data._id,
            },
            dataPost
          );
        }
      } else {
        notificationStore.addItem({
          title: "Ваш лимит комментариев на сегодня закончился ;(",
          status: "error",
          timeLife: 2500,
        });
      }
      setValue("");
      getNewComments();
      setIsOpen(false);
    }
  };

  return (
    <>
      <section className={styles.toolComment}>
        <div className={styles.leftBlock}>
          <div className={styles.views}>
            <span onClick={() => setIsOpen(!isOpen)} className={styles.text}>
              Ответить
            </span>
          </div>
          <div className={styles.mark}>
            <Dots />
          </div>
        </div>
        {/* <div className={styles.rightBlock}>
      </div> */}
      </section>
      {isOpen ? (
        <CommentInput
          type={"reply"}
          value={value}
          setValue={setValue}
          callback={replyComment}
          setIsOpen={setIsOpen}
          setImage={setImage}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default observer(ToolComment);
