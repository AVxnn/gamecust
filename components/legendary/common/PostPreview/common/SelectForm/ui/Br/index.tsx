import { useContext, useEffect, useRef, useState } from "react";
import styles from "./Br.module.scss"
import DropDownEdit from "../../../Dropdowns/DropDownEdit";
import InformationBlock from "../../../../../../MiddleBlock/editorBlock/InformationBlock";
import { Context } from "../../../../../../../../app/(pages)/layout";

const Br = ({item, dragControls} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const [hover, setHover] = useState<boolean>(false);
    
    const [focus, setFocus] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const {postCreateStore} = useContext(Context);

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

    return (
        <>
            <div
                ref={labelRef}
                onMouseEnter={() => hoverChange('on')}
                onMouseLeave={() => hoverChange('off')} 
                className={styles.container}>
                <div className={styles.container}>
                    <div className={styles.br}>
                        <div className={styles.oval}></div>
                        <div className={styles.oval}></div>
                        <div className={styles.oval}></div>
                    </div>  
                </div>
                {
                    hover && (
                        <DropDownEdit dragControls={dragControls} ref={popupRef} item={item} setIsClicked={setIsClicked} isClicked={isClicked} />
                    )
                }
                <InformationBlock item={item} />
            </div>
        </>
    );
}
 
export default Br;
