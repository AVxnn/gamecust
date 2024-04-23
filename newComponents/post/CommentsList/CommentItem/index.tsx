import React from "react";
import styles from "./CommentItem.module.scss";
import ImageLoader from "react-imageloader";
import IconHandler from "../../../../components/legendary/common/PostPreview/common/IconHandler";
import Link from "next/link";
import Toolbar from "../../../../components/legendary/common/PostPreview/common/toolbar";
import ImgPopup from "../../../../components/legendary/common/ImgPopup";

const CommentItem = ({ data }: any) => {
  console.log(data.image);
  return (
    <div className={styles.postItem}>
      <div className={styles.headerContainer}>
        <header className={`${styles.header}`}>
          <div className={styles.leftBlock}>
            <Link href={`/profile/${data?.user._id}`}>
              <div className={styles.containerAvatar}>
                <ImageLoader
                  className={styles.avatar}
                  src={`${data?.user.avatarPath}`}
                  wrapper={React.createFactory("div")}
                ></ImageLoader>
              </div>
              <div className={styles.info}>
                <span className={styles.name}>
                  {data?.user.username} <IconHandler user={data.user} />
                </span>
                <div className={styles.downinfo}>
                  <Link href={`/post/${data.postId}`}>
                    <span className={styles.title}>{data.postId}</span>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </header>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.text}</p>
        {data.image && data.image !== "Произошла непредвиденная ошибка" && (
          <div className={styles.img}>
            <ImgPopup item={{ href: data.image }} />
          </div>
        )}
      </div>
      <div className={styles.toolBarContainer}>
        {/* <Toolbar data={data} /> */}
      </div>
    </div>
  );
};

export default CommentItem;
