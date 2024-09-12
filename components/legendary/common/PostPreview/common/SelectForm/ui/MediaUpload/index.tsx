import { useContext, useEffect, useRef, useState } from "react";
import styles from "./MediaUpload.module.scss";
import { observer } from "mobx-react";
import ImageAdd from "../../../../../../../../public/img/svg/ImageAdd";
import DropDownForm from "../../../Dropdowns/DropDownForm";
import Image from "next/image";
import DropDownEdit from "../../../Dropdowns/DropDownEdit";
import InformationBlock from "../../../../../../MiddleBlock/editorBlock/InformationBlock";
import { AnimatePresence } from "framer-motion";
import { Context } from "../../../../../../../../app/(pages)/layout";
import Trash from "../../../../../../../../public/img/svg/Trash";

const MediaUpload = observer(({ item, dragControls }: any) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [hover, setHover] = useState<boolean>(false);

  const [dragActive, setDragActive] = useState(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { postCreateStore } = useContext(Context);

  const sendData = (file: any, type: any) => {
    let files;
    if (type === "input") {
      files = file.currentTarget.files[0];
    } else if (type === "drag") {
      files = file.dataTransfer.files[0];
    } else if (type === "paste") {
      files = file;
    } else {
      return false;
    }

    console.log(files);
    var formdata = new FormData();
    formdata.append("image", files);
    formdata.append("id", "12312312312");
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/file/upload`, {
      method: "POST",
      body: formdata,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => {
        postCreateStore.updateItem({ ...item, href: JSON.parse(result) });
      })
      .catch((error) => console.log("error", error));
  };

  const hoverChange = (type: any) => {
    if (type === "on") {
      setHover(true);
    } else if (type === "off" && !isClicked) {
      setHover(false);
    }
  };

  useEffect(() => {
    const onKeypress = (event: any) => {
      if (event.keyCode == 13) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", (event: KeyboardEvent) =>
      onKeypress(event)
    );
    return () => {
      document.addEventListener("keydown", (event: KeyboardEvent) =>
        onKeypress(event)
      );
    };
  }, []);

  const handleClickOutside = (e: any) => {
    if (isClicked || hover) {
      if (labelRef.current && !labelRef.current.contains(e.target)) {
        hoverChange("off");
        setIsClicked(false);
      }
    }
  };
  useEffect(() => {
    if ((typeof document !== "undefined" && isClicked) || hover) {
      document.addEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
      return document.removeEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
    }
  });

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      sendData(e, "drag");
    }
  };

  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  function handlePaste(e: any) {
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;

    if (!item?.href) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const file = items[i].getAsFile();
          sendData(file, "paste");
        }
      }
    }
  }

  useEffect(() => {
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  const deleteImage = () => {
    var formdata = new FormData();
    const regex = /([^/]+)\.(png|jpg|jpeg|gif)$/;
    const url = item.href.match(regex);
    if (url) {
      formdata.append("pathUrl", url[0]);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/file/deleteupload`, {
        method: "POST",
        body: formdata,
        redirect: "follow",
      })
        .then((response) => response.text())
        .then((result) => {
          postCreateStore.updateItem({ ...item, href: "" });
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <>
      <div
        ref={labelRef}
        onMouseEnter={() => hoverChange("on")}
        onMouseLeave={() => hoverChange("off")}
        className={styles.container}
      >
        {item?.href ? (
          <div className={styles.uploadImage}>
            <Image layout={"fill"} src={item.href} alt="" />

            <div className={styles.trash} onClick={() => deleteImage()}>
              <Trash />
            </div>
          </div>
        ) : !dragActive ? (
          <label htmlFor={item.id} className={styles.info}>
            <form
              onSubmit={(e) => e.preventDefault()}
              onDragEnter={handleDrag}
              className={styles.fileBlock}
            >
              <ImageAdd />
              <input
                multiple={true}
                onChange={(e) => sendData(e, "input")}
                className={styles.file}
                type="file"
                id={item.id}
                name={item.id}
                accept="image/*"
              />
            </form>
          </label>
        ) : (
          <>
            <div
              className={styles.fileBlockDrag}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <span className={styles.text}>Отпустите файл</span>
            </div>
          </>
        )}
        {hover && (
          <DropDownEdit
            dragControls={dragControls}
            ref={popupRef}
            item={item}
            setIsClicked={setIsClicked}
            isClicked={isClicked}
          />
        )}
        <InformationBlock item={item} />
      </div>
    </>
  );
});

export default MediaUpload;
