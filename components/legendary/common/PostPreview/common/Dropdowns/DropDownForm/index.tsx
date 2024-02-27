import styles from "./DropDownForm.module.scss";
import Text from "../../../../../../../public/img/svg/Text";
import Heading from "../../../../../../../public/img/svg/Heading";
import ImageIcon from "../../../../../../../public/img/svg/ImageIcon";
import LinkIcon from "../../../../../../../public/img/svg/LinkIcon";
import DotsIcon from "../../../../../../../public/img/svg/DotsIcon";
import { useContext, useEffect, useRef } from "react";
import Plus from "../../../../../../../public/img/svg/Plus";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react";
import uuid from "react-uuid";
import { Context } from "../../../../../../../app/(pages)/layout";
import ListIcon from "../../../../../../../public/img/svg/listIcon";
import QuoteIcon from "../../../../../../../public/img/svg/quoteIcon";
import CodeIcon from "../../../../../../../public/img/svg/CodeIcon";

const DropDownForm = observer(
  ({
    setIsClicked,
    dragControls,
    isClicked,
    hoverChange,
    setFocus,
    id,
  }: any) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const { postCreateStore } = useContext(Context);

    const handleClickOutside = (e: any) => {
      if (isClicked) {
        if (labelRef.current && !labelRef.current.contains(e.target)) {
          setIsClicked(false);
          setFocus(false);
        }
      }
    };

    const createNewFormChange = (type: string) => {
      let result = {};
      if (type == "text") {
        result = {
          type: "text",
          value: "",
          stared: false,
          unicalId: uuid(),
          id: postCreateStore.data.length - 1,
        };
      } else if (type == "h1") {
        result = {
          type: "h1",
          value: "",
          stared: false,
          unicalId: uuid(),
          id: postCreateStore.data.length - 1,
        };
      } else if (type == "h2") {
        result = {
          type: "h2",
          value: "",
          stared: false,
          unicalId: uuid(),
          id: postCreateStore.data.length - 1,
        };
      } else if (type == "media") {
        result = {
          type: "media",
          value: "",
          stared: false,
          href: "",
          unicalId: uuid(),
          id: postCreateStore.data.length - 1,
        };
      } else if (type == "link") {
        result = {
          type: "link",
          typeMedia: "",
          stared: false,
          href: "",
          unicalId: uuid(),
          id: postCreateStore.data.length - 1,
        };
      } else if (type == "quote") {
        result = {
          type: "quote",
          value: "",
          author: "",
          stared: false,
          unicalId: uuid(),
          id: postCreateStore.data.length - 1,
        };
      } else if (type == "list") {
        result = {
          type: "list",
          value: "<li>",
          typeList: "ul",
          stared: false,
          unicalId: uuid(),
          id: postCreateStore.data.length - 1,
        };
        document.execCommand("insertUnorderedList", false); // Send the command to the browser
      }
      // else if (type == "code") {
      //   result = {
      //     type: "code",
      //     value: "",
      //     stared: false,
      //     unicalId: uuid(),
      //     id: postCreateStore.data.length - 1,
      //   };
      else if (type == "br") {
        result = {
          type: "br",
          stared: false,
          unicalId: uuid(),
          id: postCreateStore.data.length - 1,
        };
      }
      postCreateStore.addItem(result, id);
      setIsClicked(false);
      setFocus(false);
      hoverChange("off");
      postCreateStore.saveHandler();
    };

    const onBlurHandler = () => {
      setIsClicked(false);
      setFocus(false);
    };

    useEffect(() => {
      if (typeof document !== "undefined" && isClicked) {
        document.addEventListener("click", (e: any) => {
          handleClickOutside(e);
        });
        return document.removeEventListener("click", (e: any) => {
          handleClickOutside(e);
        });
      }
    }, []);

    return (
      <>
        <div ref={labelRef} className={styles.toolbar}>
          <button
            onPointerDown={(event) => dragControls?.start(event)}
            tabIndex={0}
            onClick={() => setIsClicked(!isClicked)}
            className={cn(styles.newForm, isClicked && styles.active)}
          >
            <Plus />
          </button>
          <AnimatePresence initial={false} mode="wait">
            {isClicked ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={popupRef}
                className={styles.dropDownForm}
              >
                <li
                  tabIndex={0}
                  onClick={() => createNewFormChange("text")}
                  className={styles.item}
                >
                  <Text />
                  <p className={styles.text}>Текст</p>
                </li>
                <li
                  tabIndex={0}
                  onClick={() => createNewFormChange("h2")}
                  className={styles.item}
                >
                  <Heading />
                  <p className={styles.text}>Заголовок</p>
                </li>
                <li
                  tabIndex={0}
                  onClick={() => createNewFormChange("media")}
                  className={styles.item}
                >
                  <ImageIcon />
                  <p className={styles.text}>Фото или видео</p>
                </li>
                <li
                  tabIndex={0}
                  onClick={() => createNewFormChange("link")}
                  className={styles.item}
                >
                  <LinkIcon />
                  <p className={styles.text}>Вставить</p>
                </li>
                <li
                  tabIndex={0}
                  onClick={() => createNewFormChange("list")}
                  className={styles.item}
                >
                  <ListIcon />
                  <p className={styles.text}>Список</p>
                </li>
                <li
                  onBlur={() => onBlurHandler()}
                  tabIndex={0}
                  onClick={() => createNewFormChange("br")}
                  className={styles.item}
                >
                  <DotsIcon />
                  <p className={styles.text}>Разделитель</p>
                </li>
                <li
                  onBlur={() => onBlurHandler()}
                  tabIndex={0}
                  onClick={() => createNewFormChange("quote")}
                  className={styles.item}
                >
                  <QuoteIcon />
                  <p className={styles.text}>Цитата</p>
                </li>
                {/* <li
                  onBlur={() => onBlurHandler()}
                  tabIndex={0}
                  onClick={() => createNewFormChange("code")}
                  className={styles.item}
                >
                  <CodeIcon />
                  <p className={styles.text}>Код</p>
                </li> */}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </>
    );
  }
);

export default DropDownForm;
