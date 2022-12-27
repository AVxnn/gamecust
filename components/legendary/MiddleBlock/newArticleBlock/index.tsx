import React from 'react';
import styles from './newArticleBlock.module.scss'
import Input from "../../input";

const NewArticleBlock = () => {
  return (
    <div className={styles.newArticle}>
      <h4 className={styles.title}>Опубликовать пост</h4>
      <Input size={'big'} placeholder={'Введите заголовок (обязательно)'}>Заголовок</Input>
      <Input size={'big'} placeholder={'Введите заголовок (обязательно)'}>Заголовок</Input>
    </div>
  );
};

export default NewArticleBlock;
