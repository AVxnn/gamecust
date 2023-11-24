import React, { useContext, useEffect, useState } from 'react';
import styles from './Counter.module.scss'
import Like from "../../../../../../public/img/svg/Like";
import { Context } from '../../../../../../pages/_app';
import { observer } from 'mobx-react-lite';

const Counter = ({data} : any) => {

  const [isLikes, setIsLikes] = useState(data.likes)

  const {mobxStore, postCreateStore} = useContext(Context);
  
  const openPost = () => {
    let result = isLikes.filter((item: any) => item.id == mobxStore.user.id)
    if (!result.length) {
      postCreateStore.updatePost({...data, likes: [...isLikes, {id: mobxStore.user.id, username: mobxStore.user.username, avatarPath: mobxStore.user.avatarPath}]});
      setIsLikes([...isLikes, {id: mobxStore.user.id, username: mobxStore.user.username, avatarPath: mobxStore.user.avatarPath}])
    } else {
      let array = isLikes.filter((user: any) => user.id != mobxStore.user.id)
      postCreateStore.updatePost({...data, likes: array});
      setIsLikes(array)
    }
  }

  return (
    <div onClick={() => openPost()} className={styles.counter}>
      <div className={styles.like}>
        <Like type={!isLikes.filter((user: any) => user.id == mobxStore.user.id).length}/>
      </div>
      <span className={styles.title}>{isLikes.length}</span>
    </div>
  );
};

export default observer(Counter);
