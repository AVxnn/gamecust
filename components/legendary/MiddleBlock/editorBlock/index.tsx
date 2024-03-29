import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./editorBlock.module.scss";
import ToolBar from "./ToolBar";
import ChangeAccount from "./ChangeAccount";
import ConstructorBlocks from "./ConstructorBlocks";
import { observer } from "mobx-react";
import { Reorder } from "framer-motion";
import useDebounce from "../../../../features/Hooks/useDebounce";
import uuid from "react-uuid";
import { Context } from "../../../../app/(pages)/layout";
import { useParams } from "next/navigation";
import TitleBlock from "./Blocks/TitleBlock";

const EditorBlock = ({ post }: any) => {
  const { mobxStore, postCreateStore, notificationStore } = useContext(Context);

  const [items, setItems] = useState(postCreateStore.data);

  const { postId } = useParams() as any;

  const editor = useRef<HTMLDivElement>() as any;

  const [pressKey, setPressKey] = useState(false);

  const saveHandler = useCallback(() => {
    if (postCreateStore.data.length > 1 && mobxStore.user.id) {
      postCreateStore.updateData(
        mobxStore.user,
        postCreateStore.data,
        postCreateStore.postId,
        postCreateStore.category,
        postCreateStore.title
      );
    }
    setPressKey(false);
  }, [mobxStore.user, postCreateStore]);

  const debouncedSave = useDebounce(saveHandler, 1000);
  const debouncedSaveSecond = useDebounce(saveHandler, 4000);

  const keyPress = useCallback(() => {
    setPressKey(true);
    debouncedSave();
  }, []);

  const createNewPost = useCallback(() => {
    if (postCreateStore.data.length >= 1) {
      if (
        !postCreateStore.data[postCreateStore?.data?.length - 1].value &&
        postCreateStore.data[postCreateStore?.data?.length - 1].type == "text"
      ) {
        
      } else {
        let res = {
          type: "text",
          value: "",
          unicalId: uuid(),
          id: postCreateStore.data.length,
        };
        postCreateStore.addItem(res);
      }
    } else {
      let res = {
        type: "text",
        value: "",
        unicalId: uuid(),
        id: postCreateStore.data.length,
      };
      postCreateStore.addItem(res);
    }
  }, [postCreateStore]);

  const handleReorder = useCallback(
    (newList: any) => {
      let result = postCreateStore.sortArray(newList);
      const reorderedItems = [...result];
      setItems(reorderedItems);
      debouncedSaveSecond();
    },
    [mobxStore.user, postCreateStore]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    editor?.current?.addEventListener("click", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
      editor?.current?.removeEventListener("click", keyPress);
    };
  }, [keyPress]);

  useEffect(() => {
    keyPress();
  }, []);

  useEffect(() => {
    setItems(postCreateStore.data);
  }, [postCreateStore.data]);

  return (
    <div className={styles.editor}>
      <ChangeAccount post={post} />
      <div ref={editor} className={styles.editor_list}>
        <TitleBlock item={post.title} />
        <Reorder.Group axis="y" values={items} onReorder={handleReorder}>
          {items.map((item: any) => {
            return <ConstructorBlocks data={item} key={item.unicalId} />;
          })}
        </Reorder.Group>
        <div
          onClick={() => createNewPost()}
          className={styles.createNewBlock}
        ></div>
      </div>
      <ToolBar pressKey={pressKey} />
    </div>
  );
};

export default observer(EditorBlock);
