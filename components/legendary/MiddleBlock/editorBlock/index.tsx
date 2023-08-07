import React, { useCallback, useContext, useEffect, useState } from 'react';
import styles from './editorBlock.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../../features/CreatePost/CreatePostSlice';
import ToolBar from './ToolBar';
import ChangeAccount from './ChangeAccount';
import ConstructorBlocks from './ConstructorBlocks';
import { Context } from '../../../../pages/_app';
import { observer } from "mobx-react"
import { Reorder, useDragControls } from 'framer-motion';

const EditorBlock = observer(() => {

  const {postCreateStore} = useContext(Context);
  const dragControls = useDragControls();

  const keyPress = useCallback(
    (e: any) => {
      if (e.keyCode === 13 || e.keyCode === 9) {
        let res = {
          type: 'text',
          value: '',
          id: postCreateStore.data.length,
        }
        postCreateStore.addItem(res);
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  console.log(postCreateStore.data);
  
  return (
    <div className={styles.editor}>
      <ChangeAccount />
      <div className={styles.editor_list}>
      <Reorder.Group values={postCreateStore.data} onReorder={(e) => postCreateStore.updateArray(e)}>
          {
            postCreateStore.data.map((item: any, index: number) => (
              <Reorder.Item 
                onDragEnd={() => postCreateStore.sortArray(postCreateStore.data)}
                key={item.id}
                dragControls={dragControls} 
                value={item}>
                <ConstructorBlocks data={item} key={index}/>
              </Reorder.Item>
            ))
          } 
        </Reorder.Group>
      </div>
      <ToolBar />
    </div>
  );
});

export default EditorBlock;
