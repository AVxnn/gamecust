import styles from "./DropDownForm.module.scss"
import Text from "../../../../../../../public/img/svg/Text"
import Heading from "../../../../../../../public/img/svg/Heading";
import ImageIcon from "../../../../../../../public/img/svg/ImageIcon";
import LinkIcon from "../../../../../../../public/img/svg/LinkIcon";
import DotsIcon from "../../../../../../../public/img/svg/DotsIcon";
import { useContext, useEffect, useRef } from "react";
import Plus from "../../../../../../../public/img/svg/Plus";
import cn from "classnames";
import { Context } from "../../../../../../../pages/_app";
import { motion } from "framer-motion";
import { observer } from "mobx-react";

const DropDownForm = observer(({setIsClicked, isClicked} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const {postCreateStore} = useContext(Context);

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
                stared: false,
                id: postCreateStore.data.length
            }
        } else if (type == 'h1') {
            result = {
                type: 'h1',
                value: '',
                stared: false,
                id: postCreateStore.data.length
            }
        } else if (type == 'media') {
            result = {
                type: 'media',
                value: '',
                stared: false,
                href: '',
                id: postCreateStore.data.length
            }
        } else if (type == 'link') {
            result = {
                type: 'link',
                typeMedia: '',
                stared: false,
                href: '',
                id: postCreateStore.data.length
            }
        } else if (type == 'br') {
            result = {
                type: 'br',
                stared: false,
                id: postCreateStore.data.length
            }
        }
        postCreateStore.addItem(result);
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
                        <motion.div 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}  
                            ref={popupRef} 
                            className={styles.dropDownForm}
                            >
                            <div onClick={() => createNewFormChange('text')} className={styles.item}>
                                <Text />
                                <p className={styles.text}>Текст</p>
                            </div>
                            <div onClick={() => createNewFormChange('h1')} className={styles.item}>
                                <Heading />
                                <p className={styles.text}>Заголовок</p>
                            </div>
                            <div onClick={() => createNewFormChange('media')} className={styles.item}>
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
                        </motion.div>
                    )
                }
            </div>
        </>
    );
})
 
export default DropDownForm;