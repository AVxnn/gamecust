import React, { useContext, useState } from 'react'
import styles from "./SetAvatar.module.scss"
import { Context } from '../../../../../../../../pages/_app';
import Image from "next/image"

const data = [
    'https://gamecust.ru/static/a819f3dd-940d-44a3-a49a-ed747ef3fe4d.jpg',
    'https://gamecust.ru/static/a819f3dd-940d-44a3-a49a-ed747ef3fe4d.jpg',
    'https://gamecust.ru/static/a819f3dd-940d-44a3-a49a-ed747ef3fe4d.jpg',
    'https://gamecust.ru/static/a819f3dd-940d-44a3-a49a-ed747ef3fe4d.jpg'
]

const SetAvatar = ({setPage} : any) => {

    const {mobxStore, notificationStore} = useContext(Context);

    const [avatarNumber, setAvatarNumber] = useState(0)
    const [avatar, setAvatar] = useState('')

    const clickOnImage = (item : any, index: number) => {
        setAvatar(item)
        setAvatarNumber(index + 1)
    }

    const setAvatarHandler = () => {
        if (avatar) {
            notificationStore.addItem({title: 'Аватарка сохранена', status: 'success', timeLife: 2500})
            setPage(2)
        } else {
            notificationStore.addItem({title: 'Нужно выбрать аватарку', status: 'error', timeLife: 2500})
        }
    }

    return (
        <>
            <h2 className={styles.title}>Выбери аватарку</h2>
            <div className={styles.container}>
                {
                    data.map((item: any, index: number) => (
                        <div key={index} onClick={() => clickOnImage(item, index)} className={`${styles.avatar} ${avatarNumber === index + 1 ? styles.active : ''}`}>
                            <Image layout="fill" src={item} alt=""/>
                        </div>
                    ))
                }
            </div>
            <input className={styles.button} onClick={() => setAvatarHandler()} type="button" value={'Дальше'} />
        </>
    )
}

export default SetAvatar