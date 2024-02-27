import styles from "./DropDownEdit.module.scss";
import Star from "../../../../../../../public/img/svg/Star";
import StarNotFill from "../../../../../../../public/img/svg/StarNotFill";
import ArrowTop from "../../../../../../../public/img/svg/ArrowTop";
import ArrowBottom from "../../../../../../../public/img/svg/ArrowBottom";
import Trash from "../../../../../../../public/img/svg/Trash";
import { useContext, useEffect, useRef } from "react";
import NewForm from "../../../../../../../public/img/svg/NewForm";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Context } from "../../../../../../../app/(pages)/layout";
import Options from "../Options";
import { observer } from "mobx-react-lite";

const DropDownEdit = observer(
  ({ item, setIsClicked, isClicked, dragControls }: any) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const { postCreateStore, notificationStore } = useContext(Context);

    const MoveHandler = (move: any) => {
      console.log("move up", item);
      postCreateStore.MoveItem(item, move);
      setIsClicked(false);
    };

    const deleteHandler = () => {
      console.log("deleted", item);
      postCreateStore.removeItem(item);
      setIsClicked(false);
    };

    const staredHandler = (flag: boolean) => {
      postCreateStore.data.filter((item) => item.stared === true).length;
      if (
        postCreateStore.data.filter((item) => item.stared === true).length <= 2
      ) {
        postCreateStore.updateItem({ ...item, stared: flag });
        setIsClicked(false);
      } else {
        notificationStore.addItem({
          title: "Максимальное количество 3 блока в ленте",
          status: "error",
          timeLife: 2500,
        });
      }
    };

    const handleClickOutside = (e: any) => {
      if (isClicked) {
        if (
          labelRef.current &&
          !labelRef.current.contains(e.target) &&
          popupRef.current &&
          !popupRef.current.contains(e.target)
        ) {
          setIsClicked(false);
        }
      }
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
    });
    const handleDragStart = (event: any) => {
      // Prevent the drag gesture from propagating up and triggering scroll
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <>
        <div ref={labelRef} className={styles.toolbar}>
          <button
            onPointerDown={(event) => dragControls.start(event)}
            onDragStart={handleDragStart}
            tabIndex={0}
            onClick={() => setIsClicked(!isClicked)}
            className={cn(styles.newForm, isClicked && styles.active)}
          >
            <NewForm />
          </button>
          <AnimatePresence initial={false} mode="wait">
            {isClicked && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={popupRef}
                className={styles.dropDownForm}
              >
                <Options item={item} />
                {item.stared ? (
                  <div
                    onClick={() => staredHandler(false)}
                    tabIndex={0}
                    className={styles.item}
                  >
                    <Star />
                    <p className={styles.text}>Удалить из ленте</p>
                  </div>
                ) : (
                  <div
                    onClick={() => staredHandler(true)}
                    tabIndex={0}
                    className={styles.item}
                  >
                    <StarNotFill />
                    <p className={styles.text}>Показать в ленте</p>
                  </div>
                )}
                {item.id !== 0 ? (
                  <div
                    onClick={() => MoveHandler("up")}
                    tabIndex={0}
                    className={styles.item}
                  >
                    <ArrowTop />
                    <p className={styles.text}>Сделать выше</p>
                  </div>
                ) : null}
                {item.id !== postCreateStore.data.length - 1 ? (
                  <div
                    onClick={() => MoveHandler("down")}
                    tabIndex={0}
                    className={styles.item}
                  >
                    <ArrowBottom />
                    <p className={styles.text}>Сделать ниже</p>
                  </div>
                ) : null}
                <div
                  onClick={() => deleteHandler()}
                  tabIndex={0}
                  className={styles.item}
                >
                  <Trash />
                  <p className={styles.text}>Удалить блок</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    );
  }
);

export default DropDownEdit;
