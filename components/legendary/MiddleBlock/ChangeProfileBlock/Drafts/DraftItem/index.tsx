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

const DraftItem = ({ data }: any) => {
  const { mobxStore, postCreateStore } = useContext(Context);

  let image = data?.data?.filter((e: any) => e.type == "media")[0]?.href;

  const router = useRouter();

  const deleteHandler = (e: any) => {
    e.preventDefault();
    postCreateStore.deletePost(data.postId);
    router.push("/profile/" + mobxStore.user.id + "/drafts");
  };

  return (
    <Link href={`/editor/${mobxStore.user.id}/${data.postId}`}>
      <div className={styles.draft}>
        <div className={styles.image}>
          {image ? (
            <Image layout={"fill"} src={image} alt={""} />
          ) : (
            <div className={styles.noImage}></div>
          )}
        </div>
        <div className={styles.mainInfo}>
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{
              __html: data?.data?.filter((e: any) => e.type == "h1")[0]?.value,
            }}
          ></h2>
          <div className={styles.bottomInfo}>
            <span className={styles.date}>
              {formatDistanceStrict(+data.publishedDate, Date.now(), {
                addSuffix: false,
                locale: ru,
              })}{" "}
              назад
            </span>
            <div onClick={(e) => deleteHandler(e)} className={styles.delete}>
              <Trash />
              <p>Удалить черновик</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default observer(DraftItem);
