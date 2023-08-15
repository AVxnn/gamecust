import React, { useCallback, useContext, useEffect, useState } from 'react';
import styles from './editorBlock.module.scss'
import ToolBar from './ToolBar';
import ChangeAccount from './ChangeAccount';
import ConstructorBlocks from './ConstructorBlocks';
import { Context } from '../../../../pages/_app';
import { observer } from "mobx-react"
import { Reorder, useDragControls } from 'framer-motion';
import useDebounce from '../../../../features/Hooks/useDebounce';

const EditorBlock = observer(() => {

  const {mobxStore, postCreateStore, notificationStore} = useContext(Context);
  const dragControls = useDragControls();

  const [pressKey, setPressKey] = useState(false)

  const saveHandler = () => {
    notificationStore.addItem({title: 'Пост сохранен', status: 'success', timeLife: 2500})
    postCreateStore.reSavePost(mobxStore.user, postCreateStore.data, postCreateStore.postId)
    setPressKey(false)
  }

  const debouncedSave = useDebounce(saveHandler, 2500)

  const keyPress = useCallback(
    (e: any) => {
      setPressKey(true)
      debouncedSave()
      if (e.keyCode === 9) {
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
  
  return (
    <div className={styles.editor}>
      <ChangeAccount />
      <div className={styles.editor_list}>
          {
            postCreateStore.data.map((item: any, index: number) => (
                <ConstructorBlocks data={item} key={index}/>
            ))
          } 
      </div>
      <ToolBar pressKey={pressKey} />
    </div>
  );
});

export default EditorBlock;
