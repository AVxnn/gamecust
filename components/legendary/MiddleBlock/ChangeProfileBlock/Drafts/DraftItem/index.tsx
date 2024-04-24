import React, { useContext } from "react";
import styles from "./DraftItem.module.scss";
import Image from "next/image";
import Trash from "../../../../../../public/img/svg/Trash";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import { formatDistanceStrict } from "date-fns";
import { ru } from "date-fns/locale";
import { Context } from "../../../../../../app/(pages)/layout";
import Eye from "../../../../../../public/img/svg/Eye";

const DraftItem = ({ data, getMorePost }: any) => {
  const { mobxStore, postCreateStore } = useContext(Context);

  let image = data?.data?.filter((e: any) => e.type == "media")[0]?.href;

  const router = useRouter();

  const deleteHandler = (e: any) => {
    e.preventDefault();
    postCreateStore.deletePost(data.postId);
    getMorePost();
  };

  return (
    <div className={styles.draft}>
      <div className={styles.image}>
        <Link
          className={styles.link}
          href={`/editor/${mobxStore.user.id}/${data.postId}`}
        >
          {image ? (
            <Image layout={"fill"} src={image} alt={""} />
          ) : (
            <div className={styles.noImage}></div>
          )}
        </Link>
      </div>
      <div className={styles.mainInfo}>
        <Link
          className={styles.link}
          href={`/editor/${mobxStore.user.id}/${data.postId}`}
        >
          {data.title ? (
            <h2
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: data.title,
              }}
            ></h2>
          ) : (
            <h2 className={styles.title}>Введите название поста</h2>
          )}
        </Link>
        <div className={styles.bottomInfo}>
          <span className={styles.date}>
            {formatDistanceStrict(+data.publishedDate, Date.now(), {
              addSuffix: false,
              locale: ru,
            })}{" "}
            назад
          </span>
          <div className={styles.iconCont}>
            <div onClick={(e) => deleteHandler(e)} className={styles.delete}>
              <Trash />
            </div>
            <Link
              href={`/post/${data.postId}`}
              target={"_blank"}
              className={styles.delete}
            >
              <Eye />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(DraftItem);
