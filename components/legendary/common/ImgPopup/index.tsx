import React, {useRef, useState} from 'react';
import styles from './ImgPopup.module.scss'
import Image from 'next/image'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImgPopup = ({data} : any) => {

  const [openPopup, setOpenPopup] = useState(false)
  const [dataImg, setDataImg] = useState({
    width: 100,
    height: 100,
    left: 0,
    top: 0,
  })

  const imgRef = useRef<HTMLImageElement>(null);
  const img= useRef<HTMLImageElement>(null);


  const openFunc = () => {
    if(!img?.current) return
    setDataImg(img?.current?.getBoundingClientRect())
    setOpenPopup(true)
    console.log(dataImg)

  }

  return (
    <>
      <div className={`${styles.container}`}>
          <Image
            className={styles.imgPopup}
            ref={img}
            onClick={() => openFunc()}
            width={600}
            height={500}
            src={data.img}
            alt=""/>
      </div>
      {
        openPopup && (
          <div
            onClick={() => setOpenPopup(false)}
            className={styles.fixed}>
            <TransformWrapper>
              <TransformComponent>
                <Image
                  className={styles.imgPopup}
                  ref={imgRef}
                  style={{ "--left": dataImg ? `${dataImg?.left}px` : 'auto',
                    "--top": dataImg ? `${dataImg?.top}px` : 'auto',
                    "--width": dataImg ? `${dataImg?.width}px` : 'auto',
                    "--height": dataImg ? `${dataImg?.height}px` : 'auto'} as React.CSSProperties}
                  width={dataImg?.width}
                  height={dataImg?.height}
                  src={data.img}
                  alt=""/>
              </TransformComponent>
            </TransformWrapper>
          </div>
        )
      }
    </>
  );
};

export default ImgPopup;
