import styles from "./DropDownEdit.module.scss"
import Star from "../../../../../../../public/img/svg/Star";
import StarNotFill from "../../../../../../../public/img/svg/StarNotFill";
import ArrowTop from "../../../../../../../public/img/svg/ArrowTop";
import ArrowBottom from "../../../../../../../public/img/svg/ArrowBottom";
import Trash from "../../../../../../../public/img/svg/Trash";
import { useContext, useEffect, useRef } from "react";
import NewForm from "../../../../../../../public/img/svg/NewForm";
import cn from "classnames";
import { Context } from "../../../../../../../pages/_app";
import { observer } from "mobx-react";
import { motion } from "framer-motion";

const DropDownEdit = observer(({item, setIsClicked, isClicked} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const {postCreateStore} = useContext(Context);

    const MoveHandler = (move : any) => {
        console.log('move up', item);
        postCreateStore.MoveItem(item, move)
    }

    const deleteHandler = () => {
        console.log('deleted', item);
        postCreateStore.removeItem(item)
    }

    const staredHandler = (flag : boolean) => {
        console.log('addStar', item.id, postCreateStore.data);
        postCreateStore.updateItem({...item, stared: flag})
    }


    const handleClickOutside = (e: any) => {
        if (isClicked) {
            if (labelRef.current &&
                !labelRef.current.contains(e.target) &&
                popupRef.current &&
                !popupRef.current.contains(e.target)) {
                    setIsClicked(false)
            }
        }
    }

    useEffect(() => {
        if (typeof document !== "undefined" && isClicked) {
          document.addEventListener('click', (e: any) => {
            handleClickOutside(e);
          })
          return document.removeEventListener('click', (e: any) => {
            handleClickOutside(e);
          })
        }
    })

    return ( 
        <>
            <div ref={labelRef} className={styles.toolbar}>
                <button onClick={() => setIsClicked(!isClicked)} className={cn(styles.newForm, isClicked && styles.active)}><NewForm /></button>
                {
                    isClicked && (
                        <motion.div 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}  
                            ref={popupRef} 
                            className={styles.dropDownForm}
                            >
                            <p className={styles.title}>Настройки</p>
                            {
                                item.stared ? (
                                    <div onClick={() => staredHandler(false)} className={styles.item}>
                                        <Star />
                                        <p className={styles.text}>Удалить из ленте</p>
                                    </div>
                                ) : (
                                    <div onClick={() => staredHandler(true)} className={styles.item}>
                                        <StarNotFill />
                                        <p className={styles.text}>Показать в ленте</p>
                                    </div>
                                )
                            }
                            {
                                item.id !== 0 ? (
                                    <div onClick={() => MoveHandler('up')} className={styles.item}>
                                        <ArrowTop />
                                        <p className={styles.text}>Сделать выше</p>
                                    </div>
                                ) : null
                            }
                            {
                                item.id !== postCreateStore.data.length - 1 ? (
                                    <div onClick={() => MoveHandler('down')} className={styles.item}>
                                        <ArrowBottom />
                                        <p className={styles.text}>Сделать ниже</p>
                                    </div>
                                ) : null
                            }
                            <div onClick={() => deleteHandler()} className={styles.item}>
                                <Trash />
                                <p className={styles.text}>Удалить блок</p>
                            </div>
                        </motion.div>
                    )
                }
            </div>
        </>
    );
})
 
export default DropDownEdit;