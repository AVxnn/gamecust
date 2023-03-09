import React, { useContext, useEffect, useState } from 'react';
import styles from './AuthPopup.module.scss'
import Image from 'next/image'
import Plus from '../../../../../public/img/svg/Plus';
import { useDispatch, useSelector } from 'react-redux';
import { open, close } from '../../../../../features/Popup/PopupAuthSlice'
import { Context } from '../../../../../pages/_app';

const AuthPopup = () => {

    const open = useSelector((state : any) => state.popupAuth.open)
    const dispatch = useDispatch()
    const {mobxStore} = useContext(Context);

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const [page, setPage] = useState(0)

    useEffect(() => {
        setEmail('')
        setPassword('')
        setUsername('')
    }, [open])

    if (!open) {
        return null
    }

    const login = () => {
        mobxStore.login(email, password)
        dispatch(close());
    }


    const registration = () => {
        mobxStore.registration(username, email, password)
        dispatch(close())
    }

  return (
    <>
        <div className={styles.authPopup}>
            <div className={styles.container}>
                <div className={styles.leftBlock}>
                    <Image objectFit='cover' src='https://www.belpressa.ru/media/filer_public_thumbnails/filer_public/d5/4f/d54f5611-42dc-472a-bd19-15981dcf88c4/15_glavnaia.jpg__750x415_q75_crop-True_subsampling-2_upscale.jpg' layout='fill' />
                </div>
                <div className={styles.rightBlock}>
                <div className={styles.close} onClick={() => dispatch(close())}>
                    <Plus />
                </div>
                {
                    page == 1 ? (
                        <>
                            <h2 className={styles.title}>Регистрация</h2>
                            <input className={styles.input} onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder='Имя и Фамилия' />
                            <input className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Почта' />
                            <input className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Пароль' />
                            <input className={styles.button} onClick={() => registration()} type="button" value={'Регистрация'} />
                            <span className={styles.text} >Есть аккаунт? <span className={styles.link} onClick={() => setPage(0)}>Войти</span></span>
                        </>
                    ) : (
                        <>
                            <h2 className={styles.title}>Войти в аккаунт</h2>
                            <input className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email}type="email" placeholder='Почта' />
                            <input className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Пароль' />
                            <input className={styles.button} onClick={() => login()} type="button" value={'Войти'} />
                            <span className={styles.text} ><span className={styles.link} onClick={() => setPage(1)}>Регистрация</span></span>
                        </>
                    )
                }
                </div>
            </div>
        </div>
    </>
  );
};

export default AuthPopup;
