import styles from "./DropDownForm.module.scss";
import Text from "../../../../../../../public/img/svg/Text";
import Heading from "../../../../../../../public/img/svg/Heading";
import ImageIcon from "../../../../../../../public/img/svg/ImageIcon";
import LinkIcon from "../../../../../../../public/img/svg/LinkIcon";
import DotsIcon from "../../../../../../../public/img/svg/DotsIcon";
import { useContext, useEffect, useRef, useState } from "react";
import Plus from "../../../../../../../public/img/svg/Plus";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react";0
import uuid from "react-uuid";
import { Context } from "../../../../../../../app/(pages)/layout";
import ListIcon from "../../../../../../../public/img/svg/listIcon";
import QuoteIcon from "../../../../../../../public/img/svg/quoteIcon";
import Search from "../../../../../../../public/img/svg/Search";

const itemsList = [
  {
    type: "text",
    value: "Текст"
  }, {
    type: "h2",
    value: "Заголовок"
  }, {
    type: "media",
    value: "Фото или видео"
  }, {
    type: "link",
    value: "Вставить"
  }, {
    type: "list",
    value: "Список"
  }, {
    type: "br",
    value: "Разделитель"
  }, {
    type: "quote",
    value: "Цитата"
  }
]

export const setIcon = (item: any) => {
  switch (item) {
    case "text":
      return <Text />
    case "h2":
      return <Heading />
    case "media":
      return <ImageIcon />
    case "link":
      return <LinkIcon />
    case "quote":
      return <QuoteIcon />
    case "list":
      return <ListIcon />
    case "br":
      return <DotsIcon />
  }
  return null
}

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
    const [filterData, setFilterData] = useState(itemsList);
    const [searchField, setSearchField] = useState("");

    const handleClickOutside = (e: any) => {
      if (isClicked) {
        if (labelRef.current && !labelRef.current.contains(e.target)) {
          setIsClicked(false);
          setFocus(false);
        }
      }
    };

    const handleFilterItems = (e: any) => {
      const lowerCaseInput = e.toLowerCase();
      setSearchField(e)
      setFilterData(itemsList.filter(block => {
        const lowerCaseName = block.value.toLowerCase();
        return lowerCaseName.includes(lowerCaseInput);
      }))
    }

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
      postCreateStore.replaceItem(result, id);
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
                <div className={styles.search}>
                  <div className={`${styles.containerInput}`}>
                    <span className={styles.icon}><Search /></span>
                    <input
                      value={searchField}
                      placeholder="Поиск..."
                      tabIndex={0}
                      onChange={(e: any) => handleFilterItems(e.target.value)}
                      className={`${styles.search}`}
                    />
                  </div>
                </div>
                <div className={styles.divinet}></div>
                <div className={styles.itemList}>
                  {
                    filterData.length > 1 ? filterData.map((item, index) => {
                      return (
                        <li
                          key={item.type}
                          tabIndex={0}
                          onClick={() => createNewFormChange(item.type)}
                          className={styles.item}
                        >
                          {setIcon(item.type)}
                          <p className={styles.text}>{item.value}</p>
                        </li>
                      )
                    }) : (
                      <span className={styles.centerText}>Похоже пусто</span>
                    )
                  }
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </>
    );
  }
);

export default DropDownForm;
