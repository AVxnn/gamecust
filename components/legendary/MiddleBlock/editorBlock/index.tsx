import React, { useEffect, useState } from 'react';
import styles from './editorBlock.module.scss'
import Image from "next/image";
import Arrow from "../../../../public/img/svg/Arrow";
import Dots from "../../../../public/img/svg/Dots";
import Button from "../../common/Button";
import Check from "../../../../public/img/svg/Check";
import SelectForm from '../../common/PostPreview/common/SelectForm';
import { useDispatch, useSelector } from 'react-redux';
import { addForm } from '../../../../features/CreatePost/CreatePostSlice';
import Br from '../../common/Br';

const EditorBlock = () => {

  const [data, setData] = useState([1])

  const state = useSelector((state : any) => state.createPost.data)
  const dispatch = useDispatch()
  console.log(state);

  useEffect(() => {
    const onKeypress = (e : any) => {
      if (e.keyCode == 13) {
        let res = data
        res.push(data.length + 1)
        setData(res)
        dispatch(addForm(data.length))
      }
      if (e.keyCode == 'tab') {
        console.log(e);
        
      }
    }
  
    document.addEventListener('keydown', (event: KeyboardEvent) => onKeypress(event));
    return () => {
      document.addEventListener('keydown', (event: KeyboardEvent) => onKeypress(event));
    }
  }, []);
  

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
        {
          state.map((i: any, index: number) => {
            if (i.type === 'br') {
              return (
                <Br key={index}/>
              )
            }
            return (
              <SelectForm item={i} key={index}/>
            )
          })
        }
        
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
