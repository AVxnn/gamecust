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
    
    const [dragActive, setDragActive] = useState(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const {postCreateStore} = useContext(Context);
    
    const sendData = (file : any, type: any) => {
      let files = file.currentTarget.files[0]
      if (type === 'drag') {
        files = file.dataTransfer.files[0]
      }
      var formdata = new FormData();
      formdata.append("image", files);
      formdata.append("id", "12312312312");
      console.log(files)
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/file/upload`, {
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

    const handleDrop = (e : any) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        sendData(e, 'drag');
      }
    };

    const handleDrag = function(e : any) {
      e.preventDefault();
      e.stopPropagation();
      console.log('rere');
      
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

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
                    ) : !dragActive ? (
                    <form onSubmit={(e) => e.preventDefault()} onDragEnter={handleDrag} className={styles.fileBlock}>
                      <label htmlFor={'img'} className={styles.info}>
                          <ImageAdd />
                          <span className={styles.text}>Загрузите или перетащите изображение</span> 
                      </label> 
                      
                      <input multiple={true} onChange={(e) => sendData(e, 'click')} className={styles.file} type="file" id="img" name="img" accept="image/*"/>
                    </form>
                    ) : (
                      <>
                        <div className={styles.fileBlockDrag} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
                          <span className={styles.text}>Отпустите файл</span> 
                        </div>
                      </>
                    )
                  }
                {
                    hover && (
                        <DropDownEdit ref={popupRef} item={item} setIsClicked={setIsClicked} isClicked={isClicked} />
                    )
                }
                <InformationBlock item={item} />
            </div>
        </>
    );
})
 
export default MediaUpload;