import React, {useState} from 'react';
import styles from './Comments.module.scss'
import Smile from '../../../../public/img/svg/Smile'
import ImageAdd from '../../../../public/img/svg/ImageAdd'
import Button from "../Button";
import Tabs from "../Tabs";
import TextareaAutosize from 'react-textarea-autosize';
import Item from "./Item";

const list = [
  {
    title: 'Все комментарии',
  },
  {
    title: 'Только авторские',
  }
]

const Comments = ({data} : any) => {

  const [active, setActive] = useState(0)
  const [value, setValue] = useState('')

  const changePage = (index : number) => {
    setActive(index)
  }

  return (
    <>
      <div className={styles.comments}>
        <TextareaAutosize onChange={(e) => setValue(e.currentTarget.value)} placeholder={'Оставьте свой комментарий!'}/>
        <div className={styles.footer}>
          <div className={styles.left}>
            <div className={styles.icon}>
              <Smile />
            </div>
            <div className={styles.icon}>
              <ImageAdd />
            </div>
          </div>
          <div>
            {
              value && <Button type={'primary'} size={'small'}>Отправить</Button>
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
          data?.comments?.map((item : any, index : number) => {
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
