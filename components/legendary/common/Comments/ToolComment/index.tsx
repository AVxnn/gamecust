import React from 'react';
import styles from './ToolComment.module.scss'
import Dots from "../../../../../public/img/svg/Dots";
import Link from "next/link";
import Chat from "../../../../../public/img/svg/Chat";
import Counter from "../../PostPreview/common/Counter";

const ToolComment = ({data} : any) => {
  return (
    <section className={styles.toolComment}>
      <div className={styles.leftBlock}>
        <div className={styles.views}>
          <span className={styles.text}>Ответить</span>
        </div>
        <div className={styles.mark}>
          <Dots />
        </div>
      </div>
      <div className={styles.rightBlock}>
        <Counter data={data}/>
      </div>
    </section>
  );
};

export default ToolComment;
