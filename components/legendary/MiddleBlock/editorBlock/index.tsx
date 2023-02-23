import React from 'react';
import styles from './editorBlock.module.scss'
import Image from "next/image";
import Arrow from "../../../../public/img/svg/Arrow";
import Dots from "../../../../public/img/svg/Dots";
import Button from "../../common/Button";
import Check from "../../../../public/img/svg/Check";

const EditorBlock = () => {
  return (
    <div className={styles.editor}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
        </div>
        <p className={styles.name}>Личный блог</p>
        <Arrow />
      </div>
      <div className={styles.editor_list}>
        <input className={styles.titleInput} value={'Личный блог'} />
        <input className={styles.descriptionInput} value={'Текст'} />
        <h2 className={styles.title}>Личный блог</h2>
        <p className={styles.description}>Текст</p>
        <div className={styles.image}>
          <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
        </div>
      </div>
      <div className={styles.toolBar}>
        <div className={styles.left}>
          <Button type={'primary'} size={''}>Опубликовать</Button>
          <Dots />
        </div>
        <div className={styles.right}>
          <span className={styles.save}>Сохранено</span>
          <Check />
        </div>
      </div>
    </div>
  );
};

export default EditorBlock;
