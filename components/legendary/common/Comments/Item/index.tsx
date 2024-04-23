import React, { useEffect, useState } from "react";
import styles from "./Item.module.scss";
import ToolComment from "../ToolComment";
import ImgPopup from "../../ImgPopup";
import Image from "next/image";
import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";
import IconHandler from "../../PostPreview/common/IconHandler";
import Link from "next/link";

const Item = ({ comments, data, dataPost, getNewComments, value }: any) => {
  value++;
  const [showReplies, setShowReplies] = useState(
    comments.filter((item: any) => item.receiver === data._id).length <= 0 &&
      value > 1
  );
  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.topBlock}>
          <div className={styles.avatar}>
            <Link href={`/nv/profile/${data.user._id}`}>
              <div className={styles.container}>
                <Image
                  layout={"fill"}
                  src={`${data.user.avatarPath}`}
                  alt="ads"
                />
              </div>
            </Link>
            <div onClick={() => toggleReplies()} className={styles.line}></div>
          </div>
          <div className={styles.rightInfo}>
            <Link href={`/profile/${data.user._id}`}>
              <span className={styles.name}>
                {data.user.username} <IconHandler user={data.user} />
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
              {data.image &&
                data.image !== "Произошла непредвиденная ошибка" && (
                  <div className={styles.img}>
                    <ImgPopup item={{ href: data.image }} />
                  </div>
                )}
            </div>
            <ToolComment
              getNewComments={getNewComments}
              data={data}
              dataPost={dataPost}
            />
            <div className={styles.replyComments}>
              {!showReplies && value > 1 ? (
                <div className={styles.showMore} onClick={() => toggleReplies()}>
                  Показать ответы на комментарий
                </div>
              ) : (
                <>
                  {comments
                    .filter((item: any) => item.receiver === data._id)
                    .map((item: any, index: number) => {
                      return item.receiver ? (
                        <Item
                          comments={comments}
                          key={index}
                          data={item}
                          value={value}
                          getNewComments={getNewComments}
                          dataPost={dataPost}
                        />
                      ) : (
                        ""
                      );
                    })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
