import React from "react";
import styles from "./TitleCard.module.scss";
import ArrowAlt from "../../../../../../public/img/svg/arrowAlt";
import { useRouter } from "next/navigation";

const TitleCard = ({ title }: any) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.topBar}>
        <div onClick={() => router.back()} className={styles.icon}>
          <ArrowAlt />
        </div>
        <div className={styles.titleCard}>{title}</div>
      </div>
      <hr className={styles.bar} />
    </>
  );
};

export default TitleCard;
