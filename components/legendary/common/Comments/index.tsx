import React, { useContext, useEffect, useState } from "react";
import styles from "./Comments.module.scss";
import Smile from "../../../../public/img/svg/Smile";
import ImageAdd from "../../../../public/img/svg/ImageAdd";
import Button from "../Button";
import Tabs from "../Tabs";
import TextareaAutosize from "react-textarea-autosize";
import Item from "./Item";
import uuid from "react-uuid";
import { observer } from "mobx-react";
import { Context } from "../../../../app/(pages)/layout";

const list = [
  {
    title: "Все комментарии",
  },
  {
    title: "Только авторские",
  },
];

const Comments = ({ dataS, comments }: any) => {
  const [active, setActive] = useState(0);
  const [value, setValue] = useState("");
  const [dataComments, setDataComments] = useState(comments);
  const [dataPost, setDataPost] = useState(dataS);

  const { mobxStore, postCreateStore, commentsCreateStore } =
    useContext(Context);

  const changePage = (index: number) => {
    setActive(index);
  };
  console.log('1', dataPost.data.length, mobxStore.user.id)
  const createComment = async () => {
    if (value) {
      let commentId = uuid();
      if (dataPost.data.length && mobxStore.user.id) {
        await postCreateStore.updatePost({
          ...dataPost,
          comments: [...dataPost.comments, commentId],
          commentsCount: dataPost.commentsCount + 1,
        });
        await commentsCreateStore.createComment(
          mobxStore.user,
          {
            text: value,
            commentId: commentId,
            createdAt: new Date(),
            postId: dataPost.postId,
          },
          dataPost
        );
      }
      setValue("");
      await getComments();
    }
  };

  const getComments = async () => {
    const comments = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/comment/getComments/${dataPost.postId}`
    );
    setDataComments(await comments?.json());
    const post = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/post/getPost/${dataPost.postId}`
    );
    setDataPost(await post?.json());
    await setValue("");
  };

  return (
    <>
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
      <ul className={styles.navigation}>
        {list.map((item: any, index: number) => {
          return (
            <Tabs
              key={index}
              onClick={() => changePage(index)}
              current={active == index}
            >
              {item.title}
            </Tabs>
          );
        })}
      </ul>
      <div className={styles.listComments}>
        {dataComments
          .filter((item: any) => !item.repliesId)
          ?.map((item: any, index: number) => {
            return (
              <Item
                getComments={getComments}
                comments={comments}
                key={index}
                data={item}
                dataPost={dataPost}
              />
            );
          })}
      </div>
    </>
  );
};

export default observer(Comments);
