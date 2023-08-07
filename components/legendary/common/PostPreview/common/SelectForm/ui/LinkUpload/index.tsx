import { useContext, useEffect, useRef, useState } from "react";
import styles from "./LinkUpload.module.scss"
import { observer } from "mobx-react";
import { Context } from "../../../../../../../../pages/_app";
import DropDownForm from "../../../Dropdowns/DropDownForm";
import DropDownEdit from "../../../Dropdowns/DropDownEdit";
import InformationBlock from "../../../../../../MiddleBlock/editorBlock/InformationBlock";
import ReactPlayer from 'react-player'
import Image from 'next/image'

const LinkUpload = observer(({item} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const [hover, setHover] = useState<boolean>(false);
    
    const [focus, setFocus] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const {postCreateStore} = useContext(Context);
    
    const addLink = (link : any) => {
        let typeMedia = 'video'
        let lastFour = link.substring(link.length - 3)
        if (lastFour === 'png' || lastFour === 'jpg' || lastFour === 'gif') {
            typeMedia = 'image'
        }
        console.log(typeMedia);
        
        postCreateStore.updateItem({...item, href: link, typeMedia: typeMedia});
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
                className={styles.container}
                >
                <div className={styles.linkBlock}>
                    <input onChange={(e) => addLink(e.currentTarget.value)} className={styles.link} type="text" placeholder='Вставь ссылку на картинку или видео YouTube' />
                </div>
                {
                    item.typeMedia == 'video' && item.href ? (
                        <div className={styles.mediaBlock}>
                            <ReactPlayer className={styles.player} controls={true} url={item?.href} />
                        </div>
                    ) : item.typeMedia == 'image' && item.href ? (
                        <div className={styles.mediaBlock}>
                            <Image layout={'fill'} src={item.href} alt=""/>
                        </div>
                    ) : ''
                }
                {
                    hover && !item.href && (
                        <DropDownForm ref={popupRef} setIsClicked={setIsClicked} isClicked={isClicked} />
                    )
                }
                {
                    hover && item.href && (
                        <DropDownEdit ref={popupRef} item={item} setIsClicked={setIsClicked} isClicked={isClicked} />
                    )
                }
                <InformationBlock item={item} />
            </div>
        </>
    );
})
 
export default LinkUpload;