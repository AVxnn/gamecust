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
                    <Image objectFit='cover' src='https://img.freepik.com/free-vector/hand-drawn-japanese-wave-pattern-illustration_23-2149522572.jpg' layout='fill' alt='' />
                </div>
                <div className={styles.rightBlock}>
                <div className={styles.close} onClick={() => dispatch(close())}>
                    <Plus />
                </div>
                {
                    page == 1 ? (
                        <>
                            <h2 className={styles.title}>Регистрация</h2>
                            <input className={styles.input} onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder='Никнейм' />
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
