import React from 'react';
import styles from './Toolbar.module.scss'
import Eye from "../../../../../../public/img/svg/Eye";
import Mark from "../../../../../../public/img/svg/Mark";
import Chat from "../../../../../../public/img/svg/Chat";
import Arrow from "../../../../../../public/img/svg/Arrow";
import Link from "next/link";
import Counter from "../Counter";

const Toolbar = ({data} : any) => {
  return (
    <section className={styles.toolbar}>
      <div className={styles.leftBlock}>
        <div className={styles.views}>
          <Eye />
          <span className={styles.title}>{data?.viewsCount}</span>
        </div>
        <div className={styles.mark}>
          <Mark />
        </div>
      </div>
      <div className={styles.rightBlock}>
        <Link href={`/post/${data.link}/#comments`}>
          <div className={styles.comments}>
            <Chat />
            <span className={styles.title}>{data?.comments?.length}</span>
          </div>
        </Link>
        <Counter data={data}/>
      </div>
    </section>
  );
};

export default Toolbar;
