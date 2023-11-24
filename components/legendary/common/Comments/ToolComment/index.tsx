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

const ToolComment = ({ data, dataPost, getComments }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState("");

  const { mobxStore, postCreateStore, commentsCreateStore } =
    useContext(Context);

  const createComment = async () => {
    if (value) {
      let commentId = uuid();
      if (dataPost.data.length && mobxStore.user.id) {
        await postCreateStore.updatePost({
          ...dataPost,
          comments: [
            ...dataPost.comments,
            { commentId: commentId, repliesId: data.commentId },
          ],
          commentsCount: dataPost.commentsCount + 1,
        });
        await commentsCreateStore.createComment(
          mobxStore.user,
          {
            text: value,
            commentId: commentId,
            createdAt: new Date(),
            postId: dataPost.postId,
            repliesId: data.commentId,
          },
          dataPost
        );
      }
      setValue("");
      await getComments();
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
          <div onClick={() => console.log(data)} className={styles.mark}>
            <Dots />
          </div>
        </div>

        {/* <div className={styles.rightBlock}>
      </div> */}
      </section>
      {isOpen ? (
        <div className={styles.comments}>
          <TextareaAutosize
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder={"Оставьте свой комментарий!"}
          />
          <div className={styles.footer}>
            <div className={styles.left}>
              <div className={styles.icon}>
                <ImageAdd />
              </div>
            </div>
            <div>
              {value && (
                <Button clb={createComment} type={"primary"} size={"small"}>
                  Отправить
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default observer(ToolComment);
