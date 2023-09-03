import React, {useContext, useState} from 'react';
import styles from './Comments.module.scss'
import Smile from '../../../../public/img/svg/Smile'
import ImageAdd from '../../../../public/img/svg/ImageAdd'
import Button from "../Button";
import Tabs from "../Tabs";
import TextareaAutosize from 'react-textarea-autosize';
import Item from "./Item";
import { Context } from '../../../../pages/_app';

const list = [
  {
    title: 'Все комментарии',
  },
  {
    title: 'Только авторские',
  }
]

const Comments = ({dataS} : any) => {

  const [active, setActive] = useState(0)
  const [value, setValue] = useState('')

  
  const {mobxStore, commentsCreateStore} = useContext(Context);

  const changePage = (index : number) => {
    setActive(index)
  }
  console.log(dataS);
  
  const createPost = () => {
      console.log('send');
      commentsCreateStore.createComment(mobxStore.user, {text: value, createdAt: new Date(), postId: dataS.postId}, dataS)
  }

  return (
    <>
      <div className={styles.comments}>
        <TextareaAutosize onChange={(e) => setValue(e.currentTarget.value)} placeholder={'Оставьте свой комментарий!'}/>
        <div className={styles.footer}>
          <div className={styles.left}>
            <div className={styles.icon}>
              <ImageAdd />
            </div>
            <div className={styles.icon}>
              <Smile />
            </div>
          </div>
          <div>
            {
              value && <Button clb={createPost} type={'primary'} size={'small'}>Отправить</Button>
            }
          </div>
        </div>
      </div>
      <ul className={styles.navigation}>
        {
          list.map((item : any, index : number) => {
            return (
              <Tabs key={index} onClick={() => changePage(index)} current={active == index}>{item.title}</Tabs>
            )
          })
        }
      </ul>
      <div className={styles.listComments}>
        {
          dataS?.comments?.map((item : any, index : number) => {
            return (
              <Item key={index} data={item}/>
            )
          })
        }
      </div>
    </>
  );
};

export default Comments;
