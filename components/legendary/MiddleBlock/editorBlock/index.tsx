import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './editorBlock.module.scss'
import ToolBar from './ToolBar';
import ChangeAccount from './ChangeAccount';
import ConstructorBlocks from './ConstructorBlocks';
import { Context } from '../../../../pages/_app';
import { observer } from "mobx-react"
import { Reorder, useDragControls } from 'framer-motion';
import useDebounce from '../../../../features/Hooks/useDebounce';
import uuid from 'react-uuid';

const EditorBlock = () => {

  const {mobxStore, postCreateStore, notificationStore} = useContext(Context);
  const dragControls = useDragControls();

  const [items, setItems] = useState(postCreateStore.data);

  const editor = useRef<HTMLDivElement>() as any

  const [pressKey, setPressKey] = useState(false)

  const [mouseDrop, setMouseDrop] = useState(false)

  const saveHandler = () => {
    if (postCreateStore.data.length > 1 && mobxStore.user.id) {
      postCreateStore.reSavePost(mobxStore.user, postCreateStore.data, postCreateStore.postId)
    }
    setPressKey(false)
  }

  const debouncedSave = useDebounce(saveHandler, 2500)

  const keyPress = useCallback(
    () => {
      setPressKey(true)
      debouncedSave()
    },
    []
  );

  const createNewPost = () => {
    if (postCreateStore.data.length >= 1) {
      if (!postCreateStore.data[postCreateStore?.data?.length - 1].value && postCreateStore.data[postCreateStore?.data?.length - 1].type == 'text') {
        console.log('noWork');
        
      } else {
        let res = {
          type: 'text',
          value: '',
          unicalId: uuid(),
          id: postCreateStore.data.length,
        }
        postCreateStore.addItem(res);
      }
    } else {
      let res = {
        type: 'text',
        value: '',
        unicalId: uuid(),
        id: postCreateStore.data.length,
      }
      postCreateStore.addItem(res);
    }
  }

  const handleReorder = (newList : any) => {
    const reorderedItems = [...items];
    console.log(newList);
    let result = postCreateStore.sortArray(newList)
    console.log(result);
    setItems(reorderedItems);
  };

  
  
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    editor?.current?.addEventListener('click', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
      editor?.current?.removeEventListener('click', keyPress);
    }
  }, [keyPress]);

  useEffect(() => {
    console.log('save');
    keyPress()
  }, []);

  useEffect(() => {
    setItems(postCreateStore.data)
  }, [postCreateStore.data]);
  
  return (
    <div className={styles.editor}>
      <ChangeAccount />
      <div ref={editor} className={styles.editor_list}>
        <Reorder.Group axis="y" values={items} onReorder={handleReorder}>
          {
            items.map((item: any, index: number) => (
              <ConstructorBlocks data={item} key={item.unicalId}/>
            ))
          } 
        </Reorder.Group>
        <div onClick={() => createNewPost()} className={styles.createNewBlock}>
        </div>
      </div>
      <ToolBar pressKey={pressKey} />
    </div>
  );
};

export default observer(EditorBlock);
