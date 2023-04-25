import styles from "./DropDownForm.module.scss"
import Text from "../../../../../../../public/img/svg/Text"
import Heading from "../../../../../../../public/img/svg/Heading";
import ImageIcon from "../../../../../../../public/img/svg/ImageIcon";
import LinkIcon from "../../../../../../../public/img/svg/LinkIcon";
import DotsIcon from "../../../../../../../public/img/svg/DotsIcon";
import { useEffect, useRef } from "react";
import Plus from "../../../../../../../public/img/svg/Plus";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../../../../../../../features/CreatePost/CreatePostSlice";

const DropDownForm = ({setIsClicked, isClicked} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const state = useSelector((state : any) => state.createPost.data)

    const dispatch = useDispatch()

    const handleClickOutside = (e: any) => {
        if (isClicked) {
            if (labelRef.current &&
                !labelRef.current.contains(e.target)) {
                    setIsClicked(false)
            }
        }
    }

    const createNewFormChange = (type: string) => {
        let result = {}
        if (type == 'text') {
            result = {
                type: 'text',
                value: '',
                id: state.length
            }
        } else if (type == 'h1') {
            result = {
                type: 'h1',
                value: '',
                id: state.length
            }
        } else if (type == 'br') {
            result = {
                type: 'br',
                value: '',
                id: state.length
            }
        }
        dispatch(addForm(result))
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
                <button onClick={() => setIsClicked(!isClicked)} className={cn(styles.newForm, isClicked && styles.active)}><Plus /></button>
                {
                    isClicked && (
                        <div ref={popupRef} className={styles.dropDownForm}>
                            <div onClick={() => createNewFormChange('text')} className={styles.item}>
                                <Text />
                                <p className={styles.text}>Текст</p>
                            </div>
                            <div onClick={() => createNewFormChange('h1')} className={styles.item}>
                                <Heading />
                                <p className={styles.text}>Заголовок</p>
                            </div>
                            <div onClick={() => createNewFormChange('image')} className={styles.item}>
                                <ImageIcon />
                                <p className={styles.text}>Фото или видео</p>
                            </div>
                            <div onClick={() => createNewFormChange('link')} className={styles.item}>
                                <LinkIcon />
                                <p className={styles.text}>Вставить</p>
                            </div>
                            <div onClick={() => createNewFormChange('br')} className={styles.item}>
                                <DotsIcon />
                                <p className={styles.text}>Разделитель</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}
 
export default DropDownForm;