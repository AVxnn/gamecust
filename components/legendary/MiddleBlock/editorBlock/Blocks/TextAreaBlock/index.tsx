import { useContext, useEffect, useRef, useState } from "react";
import styles from "./TextAreaBlock.module.scss"
import TextareaAutosize from 'react-textarea-autosize';
import DropDownForm from "../../../../common/PostPreview/common/Dropdowns/DropDownForm";
import DropDownEdit from "../../../../common/PostPreview/common/Dropdowns/DropDownEdit";
import { Context } from "../../../../../../pages/_app";
import { observer } from "mobx-react";
import InformationBlock from "../../InformationBlock";

const TextAreaBlock = observer(({item} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLElement>(null) as any;

    const [hover, setHover] = useState<boolean>(false);
    
    const [focus, setFocus] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const {postCreateStore} = useContext(Context);
    
    const updateHandler = (value : any) => {
        postCreateStore.updateItem({...item, value: value})
    }

    const hoverChange = (type : any) => {
        if (type === 'on') {
            setHover(true)
        } else if (type === 'off' && !isClicked) {
            setHover(false)
        }
    }

    const handleClickOutside = (e: any) => {
        if (isClicked) {
            if (labelRef.current &&
                !labelRef.current.contains(e.target)) {
                    setFocus(false)
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

    useEffect(() => {
        labelRef.current.focus()
    }, [labelRef])

    return (
        <>
            <div
                ref={labelRef}
                onMouseEnter={() => hoverChange('on')}
                onMouseLeave={() => hoverChange('off')} 
                className={styles.container}>
                <TextareaAutosize
                    contentEditable={true}
                    className={`${styles.inputMain} ${styles[item.type]}`}
                    onChange={(e) => updateHandler(e.currentTarget.value)}
                    onFocus={() => setFocus(true)}
                    value={item.value || ''}
                    suppressContentEditableWarning={true}
                    placeholder="Нажмите Tab для выбора инструмента"
                />
                {
                    hover && !item.value && (
                        <DropDownForm ref={popupRef} setIsClicked={setIsClicked} isClicked={isClicked} />
                    )
                }
                {
                    hover && focus && item.value && (
                        <DropDownEdit ref={popupRef} item={item} setIsClicked={setIsClicked} isClicked={isClicked} />
                    )
                }
                <InformationBlock item={item} />
            </div>
        </>
    );
})
 
export default TextAreaBlock;