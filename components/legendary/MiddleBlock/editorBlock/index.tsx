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
import { Reorder, useDragControls } from "framer-motion";
import useDebounce from "../../../../features/Hooks/useDebounce";
import uuid from "react-uuid";
import { Context } from "../../../../app/(pages)/layout";
import { useParams } from "next/navigation";
import TextAreaBlock from "./Blocks/TextAreaBlock";

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
        postCreateStore.category
      );
    }
    setPressKey(false);
  }, [mobxStore.user, postCreateStore]);

  const debouncedSave = useDebounce(saveHandler, 500);

  const keyPress = useCallback(() => {
    setPressKey(true);
    debouncedSave();
  }, []);

  const createNewPost = useCallback(() => {
    console.log(postCreateStore.data.length);
    if (postCreateStore.data.length >= 1) {
      if (
        !postCreateStore.data[postCreateStore?.data?.length - 1].value &&
        postCreateStore.data[postCreateStore?.data?.length - 1].type == "text"
      ) {
        console.log("noWork");
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
      saveHandler();
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
    console.log("save");
    keyPress();
  }, []);

  useEffect(() => {
    setItems(postCreateStore.data);
  }, [postCreateStore.data]);
  console.log("render");
  return (
    <div className={styles.editor}>
      <ChangeAccount post={post} />
      <div ref={editor} className={styles.editor_list}>
        <TextAreaBlock item={items[0]} />
        <Reorder.Group axis="y" values={items} onReorder={handleReorder}>
          {items.map((item: any, index: number) => {
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
