import { useContext, useEffect, useRef, useState } from "react";
import styles from "./TextAreaBlock.module.scss";
import { observer } from "mobx-react";
import InformationBlock from "../../InformationBlock";
import ContentEditable from "react-contenteditable";
import { Context } from "../../../../../../app/(pages)/layout";

const TitleBlock = ({ item }: any) => {
  console.log(item)
  const popupRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLElement>(null) as any;
  const inputText = useRef<HTMLElement>(null) as any;

  const [selectedText, setSelectedText] = useState<string>("");

  const [focus, setFocus] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [posPopup, setPosPopup] = useState({
    left: 0,
    top: 0,
  }) as any;

  const { postCreateStore } = useContext(Context);

  const updateHandler = (value: any) => {
    setFocus(true);
    postCreateStore.updateTitle(value);
  };

  const handleClickOutside = (e: any) => {
    if (labelRef.current && !labelRef.current.contains(e.target)) {
      setIsClicked(false);
      setFocus(false);
    }
  };

  const handleTextSelection = () => {
    if (document) {
      const text = document.getSelection()?.toString() as any;
      setSelectedText(text);
    }
  };

  const getSelectedWordCoordinates = () => {
    if (inputText.current) {
      const selection = window.getSelection() as any; // Получаем текущее выделение
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0); // Получаем первый Range в выделении
        const rect = range.getBoundingClientRect(); // Получаем координаты выделенного текста
        setPosPopup({ left: rect.left, top: rect.top });
        console.log(`Left: ${rect.left}, Top: ${rect.top}`);
      } else {
        console.log("Текст не выделен.");
      }
    }
  };

  // Функция отлавливающая вставленный текст
  const handlePaste = (e: any) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text/plain"); // Получаем вставленный текст
    document.execCommand('insertText', false, pastedText);
  };
  
  useEffect(() => {
    getSelectedWordCoordinates();
  }, [selectedText]);

  useEffect(() => {
    if ((typeof document !== "undefined" && isClicked)) {
      document.addEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
      return document.removeEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
    }
  });

  useEffect(() => {
    inputText.current.focus();
  }, [postCreateStore]);

  return (
    <>
      <div
        ref={labelRef}
        className={styles.container}
      >
        <ContentEditable
          contentEditable={true}
          innerRef={inputText}
          className={`${styles.inputMain}`}
          onChange={(e) => updateHandler(e.target.value)}
          onMouseUp={handleTextSelection}
          onPaste={handlePaste}
          onClick={() => setFocus(true)}
          onFocus={() => setFocus(true)}
          html={postCreateStore.title}
          tagName="article"
          suppressContentEditableWarning={true}
        />
        {!postCreateStore.title && (
          <span className={`${styles.placeholder}`}>
            Заголовок
          </span>
        )}
        <InformationBlock item={item} />
      </div>
    </>
  );
};

export default observer(TitleBlock);
