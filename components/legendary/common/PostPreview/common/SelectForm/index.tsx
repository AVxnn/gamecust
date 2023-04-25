import { useEffect, useRef, useState } from "react";
import styles from "./SelectForm.module.scss"
import DropDownForm from "../Dropdowns/DropDownForm";
import DropDownEdit from "../Dropdowns/DropDownEdit";
import cn from "classnames";
import TextareaAutosize from 'react-textarea-autosize';

const SelectForm = ({item} : any) => {

    const [value, setValue] = useState<string>('');

    const [hover, setHover] = useState<boolean>(false);

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const changeValue = (value : string) => {
        setValue(value)
    }

    const hoverChange = (type : any) => {
        if (type === 'on') {
            setHover(true)
        } else if (type === 'off' && !isClicked) {
            setHover(false)
        }
    }

    useEffect(() => {
        const onKeypress = (event : any) => {
          if (event.keyCode == 13) {
            event.preventDefault()
          }
        }
      
        document.addEventListener('keydown', (event: KeyboardEvent) => onKeypress(event));
        return () => {
            document.addEventListener('keydown', (event: KeyboardEvent) => onKeypress(event));
        }
      }, []);

    return (
        <>
            <div onMouseEnter={() => hoverChange('on')} onMouseLeave={() => hoverChange('off')} className={styles.container}>
                <TextareaAutosize 
                    contentEditable={true}
                    className={`${styles.inputMain} ${styles[item.type]}`}
                    onChange={(e) => changeValue(e.currentTarget.value)}
                    suppressContentEditableWarning={true}
                    placeholder="Нажмите Tab для выбора инструмента"
                >
                    {value}
                </TextareaAutosize>
                {
                    hover && !value && (
                        <DropDownForm setIsClicked={setIsClicked} isClicked={isClicked} />
                    )
                }
                {
                    hover && value && (
                        <DropDownEdit setIsClicked={setIsClicked} isClicked={isClicked} />
                    )
                }
            </div>
        </>
    );
}
 
export default SelectForm;