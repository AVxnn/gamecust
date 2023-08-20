import React, { useCallback, useContext, useState } from 'react'
import styles from "./AvatarChanger.module.scss"
import Image from "next/image"
import Button from '../../../../common/Button'
import { Context } from '../../../../../../pages/_app'
import { observer } from 'mobx-react-lite'

const AvatarChanger = () => {

    const {mobxStore} = useContext(Context);

    const [avatar, setAvatar] = useState({
        imgSrc: ''
    }) as any;

    const sendData = (file : any, type: any) => {
        let files = file.currentTarget.files[0]
        if (type === 'drag') {
          files = file.dataTransfer.files[0]
        }
        var formdata = new FormData();
        formdata.append("image", files);
        formdata.append("id", "12312312312");
        console.log(files)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/file/uploadAvatar`, {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        })
        .then(response => response.text())
        .then(result => {
            console.log(result);
            mobxStore.reSaveUser({id: mobxStore.user.id, avatarPath: JSON.parse(result)});
        })
        .catch(error => console.log('error', error));
        mobxStore.deleteAvatar({ pathUrl: mobxStore.user.avatarPath});
    }
    console.log(mobxStore.user);
    
    return mobxStore.user && (
        <div className={styles.avatarChanger}>
            {/* {
                avatar.imgSrc && (
                    <PopupCrop avatar={avatar.imgSrc} />
                )
            } */}
            {
                !avatar.imgSrc && (
                    <div className={styles.avatar}>
                        <Image layout={'fill'} src={`${process.env.NEXT_PUBLIC_AVATARS_URL}${mobxStore.user.avatarPath}`} alt={''} />
                    </div>
                )
            }
            
            <div className={styles.buttons}>
                <label htmlFor={'img'} className={styles.info}>
                    <div className={styles.button}>
                        Изменить аватарку
                    </div>
                    <input multiple={true} onChange={(e) => sendData(e, 'click')} className={styles.file} type="file" id="img" name="img" accept="image/*"/>
                </label>
                <Button clb={() => console.log('w')} type={'primary'}>
                    Изменить рамку
                </Button>
            </div>
        </div>
    )
}

export default observer(AvatarChanger)