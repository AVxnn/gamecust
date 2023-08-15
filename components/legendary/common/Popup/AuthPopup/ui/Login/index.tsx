import React, { useContext, useState } from 'react'
import styles from "./Login.module.scss"
import { Context } from '../../../../../../../pages/_app';
import { useDispatch, useSelector } from 'react-redux';
import { close } from '../../../../../../../features/Popup/PopupAuthSlice'
import InputCustom from '../../../../PostPreview/common/InputCustom';

const Login = ({setAuth} : any) => {

    const [email, setEmail] = useState<any>({
        email: '',
        error: '',
    })
    const [password, setPassword] = useState<any>({
        password: '',
        error: '',
    })
    
    const {mobxStore, notificationStore, popupHandlers} = useContext(Context);
    function validateEmail(value : string) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (re.test(String(value).toLowerCase())) {
            setEmail({error: '', email: value})
        } else {
            setEmail({error: 'Неправильная почта', email: value})
        }
    }

    function validatePassword(value : string) {
        var re = /(?=.*[a-z])[0-9a-zA-Z*]{6,}/g;

        if (re.test(String(value))) {
            setPassword({error: 3, password: value})
        } else {
            setPassword({error: 0, password: value})
        }
    }

    const login = () => {
        mobxStore.login(email.email, password.password)
        notificationStore.addItem({title: 'Вы авторизировались', status: 'success', timeLife: 2500})
        popupHandlers.authPopupClose();
    }

    return (
        <>
            <div className={styles.rightBlock}>
                <div className={styles.topBar} >
                </div>
                <h2 className={styles.title}>Войти в аккаунт</h2>
                <InputCustom value={email.email} error={email.error} onChange={validateEmail} type={'email'} placeholder={'Email'}/>
                <InputCustom value={password.password} onChange={validatePassword} type={'password'} placeholder={'Password'}/>
                <input className={styles.button} onClick={() => login()} type="button" value={'Войти'} />
                <span className={styles.text} ><span className={styles.link} onClick={() => setAuth(1)}>Регистрация</span></span>
            </div>
        </>
    )
}

export default Login