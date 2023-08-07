import { useContext, useEffect, useRef, useState } from "react";
import styles from "./MediaUpload.module.scss"
import { observer } from "mobx-react";
import { Context } from "../../../../../../../../pages/_app";
import ImageAdd from "../../../../../../../../public/img/svg/ImageAdd";
import DropDownForm from "../../../Dropdowns/DropDownForm";
import Image from "next/image"
import DropDownEdit from "../../../Dropdowns/DropDownEdit";
import InformationBlock from "../../../../../../MiddleBlock/editorBlock/InformationBlock";

const MediaUpload = observer(({item} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const [hover, setHover] = useState<boolean>(false);
    
    const [focus, setFocus] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const {postCreateStore} = useContext(Context);
    
    const sendData = (file : any) => {

      var formdata = new FormData();
      formdata.append("image", file.target.files[0]);
      formdata.append("id", "12312312312");
      console.log(file.target.files[0])
      fetch("http://localhost:4000/api/file/upload", {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      })
        .then(response => response.text())
        .then(result => {
          console.log(result);
          
          postCreateStore.updateItem({...item, href: JSON.parse(result)})
        })
        .catch(error => console.log('error', error));
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

    console.log(process.env.NEXT_PUBLIC_API_URL);
    

    return (
        <>
            <div
                ref={labelRef}
                onMouseEnter={() => hoverChange('on')}
                onMouseLeave={() => hoverChange('off')} 
                className={styles.container}>
                  {
                    item?.href ? (
                      <div className={styles.uploadImage}>
                        <Image layout={'fill'} src={process.env.NEXT_PUBLIC_API_URL + item.href} alt="" />
                      </div>
                    ) : (
                    <div className={styles.fileBlock}>
                      <label htmlFor={'img'} className={styles.info}>
                          <ImageAdd />
                          <span className={styles.text}>Загрузите или перетащите изображение</span> 
                      </label> 
                      
                      <input onChange={(e) => sendData(e)} className={styles.file} type="file" id="img" name="img" accept="image/*"/>
                    </div>
                    )
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
 
export default MediaUpload;