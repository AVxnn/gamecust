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
import CommentInput from "./commentInput";
import { addImageComment } from "../../../../features/new/addImageComment/addImageComment";
import getCommentsId from "../../../../features/new/getCommentsId/getCommentsId";

const list = [
  {
    title: "Все комментарии",
  },
  {
    title: "Только авторские",
  },
];

const Comments = ({ dataS, comments, getNewComments }: any) => {
  const [active, setActive] = useState(0);
  const [value, setValue] = useState("");
  const [image, setImage] = useState() as any;
  const [dataComments, setDataComments] = useState(comments);
  const [dataPost, setDataPost] = useState(dataS);

  const { mobxStore, postCreateStore, commentsCreateStore, notificationStore } =
    useContext(Context);

  const changePage = (index: number) => {
    setActive(index);
  };
  console.log(comments);
  const getComments = async () => {
    const comments = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/comment/getComments/${dataPost.postId}`
    );
    const post = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/post/getPost/${dataPost.postId}`
    );
    setDataComments(await comments?.json());
    setDataPost(await post?.json());
  };

  const createComment = async (event: any) => {
    event.preventDefault();
    console.log(mobxStore.user);
    let commentsNow = await getCommentsId(mobxStore.user.id);
    if (
      commentsNow.length <= 3 ||
      mobxStore.user.roles.filter((role) => role === "admin")
    ) {
      let link;
      if (dataPost.data.length && mobxStore.user.id) {
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
          },
          dataPost
        );
      }
      await setValue("");
      await setImage({});
      await getComments();
    } else {
      notificationStore.addItem({
        title: "Ваш лимит комментариев на сегодня закончился ;(",
        status: "error",
        timeLife: 2500,
      });
    }
  };

  return (
    <>
      <CommentInput
        callback={createComment}
        value={value}
        setValue={setValue}
        setIsOpen={() => {}}
        setImage={setImage}
      />
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
          .filter((item: any) => !item.receiver)
          ?.map((item: any, index: number) => {
            return (
              <Item
                getNewComments={getNewComments}
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
