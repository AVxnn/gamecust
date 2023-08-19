import React, { useContext } from 'react';
import styles from './Counter.module.scss'
import Arrow from "../../../../../../public/img/svg/Arrow";
import { Context } from '../../../../../../pages/_app';

const Counter = ({data} : any) => {

  const {mobxStore, postCreateStore} = useContext(Context);

  console.log(data);

  const setCounterHandler = () => {
    data?.likes?.length ? data.likes.map((item: any, index : any) => {
      if (item === mobxStore.user.id) {
        console.log('liked', item);
      } else {
        console.log('dislike', item);
      }
    }) : console.log('dislwike');
  }

  return (
    <div className={styles.counter}>
      <div onClick={() => setCounterHandler()} className={styles.dislike}>
        <Arrow />
      </div>
      <div onClick={() => setCounterHandler()} className={styles.like}>
          <Arrow />
      </div>
      <span className={styles.title}>{data?.likes?.length}</span>
    </div>
  );
};

export default Counter;
