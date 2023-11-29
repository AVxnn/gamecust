import React, { useEffect, useState } from "react";
import styles from "./Item.module.scss";
import ToolComment from "../ToolComment";
import ImgPopup from "../../ImgPopup";
import Image from "next/image";
import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";
import IconHandler from "../../PostPreview/common/IconHandler";
import Link from "next/link";

const Item = ({ comments, data, dataPost, getNewComments }: any) => {
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.topBlock}>
          <div className={styles.avatar}>
            <Link href={`/profile/${data.userId}`}>
              <Image layout={"fill"} src={`${data.AvatarPath}`} alt="ads" />
            </Link>
          </div>
          <div className={styles.rightInfo}>
            <Link href={`/profile/${data.userId}`}>
              <span className={styles.name}>
                {data.author} <IconHandler user={data} />
              </span>
              <span className={styles.date}>
                {formatDistance(+data.createdAt, Date.now(), {
                  addSuffix: true,
                  locale: ru,
                })}{" "}
                {dataPost.uid}
              </span>
            </Link>
            <div className={styles.content}>
              <p className={styles.text}>{data.text}</p>
              {data.image && data.image !== 'Произошла непредвиденная ошибка' && (
                <div className={styles.img}>
                  <ImgPopup src={data.image} />
                </div>
              )}
            </div>
            <ToolComment
              getNewComments={getNewComments}
              data={data}
              dataPost={dataPost}
            />
            <div className={styles.replyComments}>
              {comments
                .filter((item: any) => item.repliesId === data.commentId)
                .map((item: any, index: number) => {
                  return item.repliesId ? (
                    <Item
                      comments={comments}
                      key={index}
                      data={item}
                      getNewComments={getNewComments}
                      dataPost={dataPost}
                    />
                  ) : (
                    ""
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
