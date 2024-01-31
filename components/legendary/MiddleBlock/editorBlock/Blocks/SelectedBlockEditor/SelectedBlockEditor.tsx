import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./SelectedBlockEditor.module.scss";
import LinkIcon from "../../../../../../public/img/svg/LinkIcon";
import Bold from "../../../../../../public/img/svg/Bold";
import Italic from "../../../../../../public/img/svg/Italic";
import { observer } from "mobx-react-lite";
import Arrow from "../../../../../../public/img/svg/Arrow";
import { motion } from "framer-motion";
import { Context } from "../../../../../../app/(pages)/layout";

const SelectedBlockEditor = ({ posLeft, selectedText, item }: any) => {
  const { postCreateStore } = useContext(Context);

  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const [link, setLink] = useState("");

  const handleClickOutside = (e: any) => {
    if (isOpen && selectedText) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined" && isOpen) {
      document.addEventListener("mouseup", (e: any) => {
        handleClickOutside(e);
      });
      return document.removeEventListener("mouseup", (e: any) => {
        handleClickOutside(e);
      });
    }
  });

  const isLinkHandler = () => {
    setIsLinkOpen(!isLinkOpen);
  };

  useEffect(() => {
    if (selectedText) {
      setIsOpen(true);
    }
  }, [selectedText, posLeft]);

  return isOpen ? (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2, type: "spring" }}
      className={styles.block}
      ref={popupRef}
      style={{
        left: `${posLeft.left - 0}px`,
        top: `${posLeft.top - 60}px`,
      }}
    >
      {isLinkOpen ? (
        <>
          <li onClick={isLinkHandler} className={styles.arrow}>
            <Arrow />
          </li>
          <li className={styles.input}>
            <input
              onChange={(e) => setLink(e.currentTarget.value)}
              value={link}
              type="text"
              placeholder="Вставь ссылку"
            />
          </li>
          <li
            onMouseDown={(evt) => {
              evt.preventDefault(); // Avoids loosing focus from the editable area
              document.execCommand("createLink", false, link); // Send the command to the browser
            }}
            className={styles.item}
          >
            <LinkIcon />
          </li>
        </>
      ) : (
        <>
          <li
            onMouseDown={(evt) => {
              evt.preventDefault(); // Avoids loosing focus from the editable area
              document.execCommand("bold", false); // Send the command to the browser
            }}
            className={styles.item}
          >
            <Bold />
          </li>
          <li
            onMouseDown={(evt) => {
              evt.preventDefault(); // Avoids loosing focus from the editable area
              document.execCommand("italic", false); // Send the command to the browser
            }}
            className={styles.item}
          >
            <Italic />
          </li>
          <li onClick={isLinkHandler} className={styles.item}>
            <LinkIcon />
          </li>
        </>
      )}
    </motion.div>
  ) : null;
};

export default observer(SelectedBlockEditor);
