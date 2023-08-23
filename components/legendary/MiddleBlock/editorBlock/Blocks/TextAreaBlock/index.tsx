import { useContext, useEffect, useRef, useState } from "react";
import styles from "./TextAreaBlock.module.scss"
import DropDownForm from "../../../../common/PostPreview/common/Dropdowns/DropDownForm";
import DropDownEdit from "../../../../common/PostPreview/common/Dropdowns/DropDownEdit";
import { Context } from "../../../../../../pages/_app";
import { observer } from "mobx-react";
import InformationBlock from "../../InformationBlock";
import SelectedBlockEditor from "../SelectedBlockEditor/SelectedBlockEditor";
import DOMPurify from 'dompurify';
import ContentEditable from "react-contenteditable";

const TextAreaBlock = ({item} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLElement>(null) as any;
    const inputText = useRef<HTMLElement>(null) as any;

    const [hover, setHover] = useState<boolean>(false);
    const [selectedText, setSelectedText] = useState<string>('');
    
    const [focus, setFocus] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const [posPopup, setPosPopup] = useState({
        left: 0,
        top: 0
    }) as any

    const {postCreateStore} = useContext(Context);
    
    const updateHandler = (value : any) => {
        console.log(value)
        setFocus(true);
        const sanitizedHtml = DOMPurify.sanitize(value);
        postCreateStore.updateItem({...item, value: sanitizedHtml})
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

    const handleTextSelection = () => {
        if (document) {
            const text = document.getSelection()?.toString() as any;
            setSelectedText(text);
        }
    };

    const keyPress = (e : any) => {
        if (focus && item.value == '') {
            console.log(e.keyCode);
            if (e.keyCode === 8) {
                console.log('deleted', item);
                postCreateStore.removeItem(item)
                setIsClicked(false)
            }
        }
    }

    // Функция отлавливающая вставленный текст
    const handlePaste = (e : any) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text/plain'); // Получаем вставленный текст
        updateHandler(pastedText)
    };

    const getSelectedWordCoordinates = () => {
        if (inputText.current) {
          const selection = window.getSelection() as any; // Получаем текущее выделение
          if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0); // Получаем первый Range в выделении
            const rect = range.getBoundingClientRect(); // Получаем координаты выделенного текста
            setPosPopup({left: rect.left, top: rect.top})
            console.log(`Left: ${rect.left}, Top: ${rect.top}`);
          } else {
            console.log('Текст не выделен.');
          }
        }
    };
    
    useEffect(() => {
        getSelectedWordCoordinates();
    }, [selectedText]);
    
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
                <ContentEditable
                    contentEditable={true}
                    innerRef={inputText}
                    className={`${styles.inputMain} ${styles[item.type]}`}
                    onChange={(e) => updateHandler(e.target.value)}
                    onMouseUp={handleTextSelection}
                    onPaste={handlePaste}
                    onClick={() => setFocus(true)}
                    onFocus={() => setFocus(true)}
                    html={item.value}
                    tagName='article'
                    suppressContentEditableWarning={true}
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
            {
                selectedText ? (
                    <SelectedBlockEditor ref={popupRef} posLeft={posPopup} selectedText={selectedText} item={item} />
                ) : null
            }
        </>
    );
}
 
export default observer(TextAreaBlock);