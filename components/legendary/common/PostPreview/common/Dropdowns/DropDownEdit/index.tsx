import styles from "./DropDownEdit.module.scss"
import Star from "../../../../../../../public/img/svg/Star";
import ArrowTop from "../../../../../../../public/img/svg/ArrowTop";
import ArrowBottom from "../../../../../../../public/img/svg/ArrowBottom";
import Trash from "../../../../../../../public/img/svg/Trash";
import { useEffect, useRef } from "react";
import NewForm from "../../../../../../../public/img/svg/NewForm";
import cn from "classnames";

const DropDownEdit = ({setIsClicked, isClicked} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: any) => {
        if (isClicked) {
            if (labelRef.current &&
                !labelRef.current.contains(e.target)) {
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
                        <div ref={popupRef} className={styles.dropDownForm}>
                            <div className={styles.item}>
                                <Star />
                                <p className={styles.text}>Показать в ленте</p>
                            </div>
                            <div className={styles.item}>
                                <ArrowTop />
                                <p className={styles.text}>Сделать выше</p>
                            </div>
                            <div className={styles.item}>
                                <ArrowBottom />
                                <p className={styles.text}>Сделать ниже</p>
                            </div>
                            <div className={styles.item}>
                                <Trash />
                                <p className={styles.text}>Удалить блок</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}
 
export default DropDownEdit;