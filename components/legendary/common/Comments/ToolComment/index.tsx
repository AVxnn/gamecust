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
import { addImageComment } from "../../../../../features/new/addImageComment/addImageComment"

const ToolComment = ({ data, dataPost, getNewComments }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState("");
  const [image, setImage] = useState();

  const { mobxStore, postCreateStore, commentsCreateStore } =
    useContext(Context);

  const replyComment = async (event: any) => {
    event.preventDefault();
    if (value) {
      let commentId = uuid();
      if (dataPost.data.length && mobxStore.user.id) {
        const link = await addImageComment(image);
        await commentsCreateStore.createComment(
          mobxStore.user,
          {
            text: value,
            image: link ? JSON.parse(link) : '',
            commentId: commentId,
            createdAt: new Date(),
            postId: dataPost.postId,
            repliesId: data.commentId,
          },
          dataPost
        );
      }
      setValue("");
      getNewComments();
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
        <CommentInput value={value} setValue={setValue} callback={replyComment} setIsOpen={setIsOpen} setImage={setImage}/>
      ) : (
        ""
      )}
    </>
  );
};

export default observer(ToolComment);
