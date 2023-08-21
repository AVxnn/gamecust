import { useContext, useEffect, useRef, useState } from "react";
import styles from "./TextAreaBlock.module.scss"
import TextareaAutosize from 'react-textarea-autosize';
import DropDownForm from "../../../../common/PostPreview/common/Dropdowns/DropDownForm";
import DropDownEdit from "../../../../common/PostPreview/common/Dropdowns/DropDownEdit";
import { Context } from "../../../../../../pages/_app";
import { observer } from "mobx-react";
import InformationBlock from "../../InformationBlock";

const TextAreaBlock = ({item} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLElement>(null) as any;
    const inputText = useRef<HTMLElement>(null) as any;

    const [value, setValue] = useState<string>('');
    const [hover, setHover] = useState<boolean>(false);
    
    const [focus, setFocus] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const {postCreateStore} = useContext(Context);
    
    const updateHandler = (value : any) => {
        console.log(value)
        setFocus(true);
        setValue(value)
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
        if (isClicked || hover) {
            if (labelRef.current &&
                !labelRef.current.contains(e.target)) {
                    setFocus(false)
            }
        }
    }

    const keyPress = (e : any) => {
        console.log(focus, hover, value);
        
        if (focus && item.value == '') {
            console.log(e.keyCode);
            if (e.keyCode === 8) {
                console.log('deleted', item);
                postCreateStore.removeItem(item)
                setIsClicked(false)
            }
        }
    }
    
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => {
            document.removeEventListener('keydown', keyPress)
        }
    });

    useEffect(() => {
        if (typeof document !== "undefined" && isClicked || hover) {
            document.addEventListener('click', (e: any) => {
                handleClickOutside(e);
            })
            return document.removeEventListener('click', (e: any) => {
                handleClickOutside(e);
            })
        }
    })

    useEffect(() => {
        inputText.current.focus()
    }, [postCreateStore.data])

    return (
        <>
            <div
                ref={labelRef}
                onMouseEnter={() => hoverChange('on')}
                onMouseLeave={() => hoverChange('off')} 
                className={styles.container}>
                <TextareaAutosize
                    contentEditable={true}
                    ref={inputText}
                    className={`${styles.inputMain} ${styles[item.type]}`}
                    onChange={(e) => updateHandler(e.currentTarget.value)}
                    onClick={() => setFocus(true)}
                    onFocus={() => setFocus(true)}
                    value={item.value || ''}
                    suppressContentEditableWarning={true}
                    placeholder="Нажмите Tab для выбора инструмента"
                />
                {
                    hover && !item.value || focus && !item.value ? (
                        <DropDownForm hoverChange={hoverChange} id={item.id} focus={focus} setFocus={setFocus} ref={popupRef} setIsClicked={setIsClicked} isClicked={isClicked} />
                    ) : null
                }
                {
                    hover && item.value && (
                        <DropDownEdit ref={popupRef} item={item} setIsClicked={setIsClicked} isClicked={isClicked} />
                    )
                }
                <InformationBlock item={item} />
            </div>
        </>
    );
}
 
export default observer(TextAreaBlock);