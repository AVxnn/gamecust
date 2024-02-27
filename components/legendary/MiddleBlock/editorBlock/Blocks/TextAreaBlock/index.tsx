import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styles from "./TextAreaBlock.module.scss";
import DropDownForm from "../../../../common/PostPreview/common/Dropdowns/DropDownForm";
import DropDownEdit from "../../../../common/PostPreview/common/Dropdowns/DropDownEdit";
import { observer } from "mobx-react";
import InformationBlock from "../../InformationBlock";
import SelectedBlockEditor from "../SelectedBlockEditor/SelectedBlockEditor";
import DOMPurify from "dompurify";
import ContentEditable from "react-contenteditable";
import { Context } from "../../../../../../app/(pages)/layout";
import uuid from "react-uuid";

const TextAreaBlock = ({ item, dragControls = null }: any) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLElement>(null) as any;
  const inputText = useRef<HTMLElement>(null) as any;

  const [hover, setHover] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string>("");

  const [focus, setFocus] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [posPopup, setPosPopup] = useState({
    left: 0,
    top: 0,
  }) as any;

  const { postCreateStore } = useContext(Context);

  const updateHandler = (value: any) => {
    const sanitizedHtml = DOMPurify.sanitize(value);
    postCreateStore.updateItem({ ...item, value: sanitizedHtml });
  };

  const hoverChange = (type: any) => {
    if (type === "on") {
      setHover(true);
    } else if (type === "off" && !isClicked) {
      setHover(false);
    }
  };

  const handleClickOutside = (e: any) => {
    if (labelRef.current && !labelRef.current.contains(e.target)) {
      hoverChange("off");
      setIsClicked(false);
      setFocus(false);
    } else {
      console.log(item.id);
    }
  };

  const handleTextSelection = () => {
    if (document) {
      const text = document.getSelection()?.toString() as any;
      setSelectedText(text);
    }
  };

  const keyPress = useCallback(
    (e: any) => {
      handleClickOutside(e);
      if (focus && item.value == "") {
        if (e.keyCode === 8 && item.type !== "h1") {
          postCreateStore.removeItem(item);
          setIsClicked(false);
          document.getElementById(`id-${item.id - 1}`)?.focus();
          const articleRef = document.getElementById(`id-${item.id - 1}`);
          if (articleRef) {
            const range = document.createRange();
            const selection = window.getSelection() as any;
            range.selectNodeContents(articleRef);
            range.collapse(false); // Устанавливаем конечную точку
            selection.removeAllRanges();
            selection.addRange(range);
            articleRef.focus();
          }
        }
        if (e.keyCode === 9) {
          setIsClicked(true);
        }
      }
      if (focus && e.keyCode === 13) {
        let newId = uuid();
        const result = {
          type: "text",
          value: "",
          stared: false,
          unicalId: newId,
          id: postCreateStore.data.length,
        };
        postCreateStore.addItem(result, item.id);
        e.preventDefault();
        return false;
      }
      if (focus && e.keyCode === 9) {
        if (isClicked) {
          setIsClicked(false);
        } else {
          setIsClicked(true);
        }
      }
    },
    [focus, item, postCreateStore.data]
  );

  // Функция отлавливающая вставленный текст
  const handlePaste = (e: any) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text/plain"); // Получаем вставленный текст
    document.execCommand("insertText", false, pastedText);
  };

  const getSelectedWordCoordinates = () => {
    if (inputText.current) {
      const selection = window.getSelection() as any; // Получаем текущее выделение
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0); // Получаем первый Range в выделении
        const rect = range.getBoundingClientRect(); // Получаем координаты выделенного текста
        setPosPopup({ left: rect.left, top: rect.top });
      } else {
        console.log("Текст не выделен.");
      }
    }
  };

  useEffect(() => {
    getSelectedWordCoordinates();
  }, [selectedText]);

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);

  useEffect(() => {
    document.addEventListener("click", (e: any) => handleClickOutside(e));
    return document.removeEventListener("click", (e: any) =>
      handleClickOutside(e)
    );
  }, []);

  useEffect(() => {
    inputText.current.focus();
  }, []);

  return (
    <>
      <div
        ref={labelRef}
        onMouseEnter={() => hoverChange("on")}
        onMouseLeave={() => hoverChange("off")}
        className={styles.container}
      >
        <ContentEditable
          contentEditable={true}
          innerRef={inputText}
          className={`${styles.inputMain} ${styles[item.type]}`}
          id={`id-${item.id}`}
          onChange={(e) => updateHandler(e.target.value)}
          onMouseUp={handleTextSelection}
          onMouseDown={handleTextSelection}
          onPaste={handlePaste}
          onClick={() => setFocus(true)}
          onFocus={() => setFocus(true)}
          html={item.value}
          tabIndex={-1}
          tagName="article"
          suppressContentEditableWarning={true}
        />
        {!item.value && (
          <span className={`${styles.placeholder} ${styles[item.type]}`}>
            Введи текст или нажми Tab
          </span>
        )}

        {(hover || focus) && !item.value && item.type !== "h1" ? (
          <DropDownForm
            dragControls={dragControls}
            hoverChange={hoverChange}
            focus={focus}
            setFocus={setFocus}
            ref={popupRef}
            tabIndex={0}
            setIsClicked={setIsClicked}
            isClicked={isClicked}
          />
        ) : null}
        {(hover || focus) && item.value && item.type !== "h1" ? (
          <DropDownEdit
            dragControls={dragControls}
            ref={popupRef}
            item={item}
            tabIndex={0}
            setIsClicked={setIsClicked}
            isClicked={isClicked}
          />
        ) : null}
        <InformationBlock item={item} />
      </div>
      {item.type !== "h1" ? (
        <SelectedBlockEditor
          ref={popupRef}
          posLeft={posPopup}
          selectedText={selectedText}
          item={item}
        />
      ) : null}
    </>
  );
};

export default observer(TextAreaBlock);
