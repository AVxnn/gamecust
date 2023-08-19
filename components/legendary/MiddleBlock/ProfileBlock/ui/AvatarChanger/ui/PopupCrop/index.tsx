import React, { useState } from 'react'
import styles from "./PopupCrop.module.scss"
import Cropper from 'react-easy-crop'
import 'react-image-crop/dist/ReactCrop.css'

const CROP_AREA_ASPECT = 1 / 1;

const Output = ({ croppedArea, avatar } : any) => {
    const scale = 100 / croppedArea.width;
    const transform = {
      x: `${-croppedArea.x * scale}%`,
      y: `${-croppedArea.y * scale}%`,
      scale,
      width: "calc(100% + 0.5px)",
      height: "auto"
    };
  
    const imageStyle = {
      transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
      width: transform.width,
      height: transform.height
    };
  
    return (
      <div
        className="output"
        style={{ paddingBottom: `${100 / CROP_AREA_ASPECT}%` }}
      >
        <img src={avatar} alt="" style={imageStyle} />
      </div>
    );
  };

const PopupCrop = ({avatar} : any) => {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);

    return (
        <div className={styles.popupCrop}>
            <div className={styles.cropContainer}>
                <Cropper
                    image={avatar}
                    aspect={CROP_AREA_ASPECT}
                    crop={crop}
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropAreaChange={(croppedArea : any) => {
                        setCroppedArea(croppedArea);
                    }}
                />
                <button className={styles.save}>Сохранить</button>
            </div>
        </div>
    )
}

export default PopupCrop