import React, { useContext, useState } from 'react'
import styles from "./Login.module.scss"
import { Context } from '../../../../../../../pages/_app';
import InputCustom from '../../../../PostPreview/common/InputCustom';
import Google from "../../../../../../../public/img/google.png"
import Image from "next/image"
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode"

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

    const login = async () => {
        let result = await mobxStore.login(email.email, password.password)
        if (result?.status == 400) { 
            notificationStore.addItem({title: result.errors, status: 'error', timeLife: 2500})
        } else {
            notificationStore.addItem({title: 'Вы авторизировались', status: 'success', timeLife: 2500})
        }
        
        popupHandlers.authPopupClose();
    }

    const loginWithGoogle = async (item: any, token: any) => {
        mobxStore.registrationGoogle(item.name, item.email, item.picture, item.sub, item.email_verified)
        notificationStore.addItem({title: 'Аккаунт зарегистрирован', status: 'success', timeLife: 2500})
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
                <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API}`}>
                    <div className={styles.oauth}>
                        <span className={styles.subTitle}>или</span>
                        <div className={styles.google}>
                            <Image src={Google} alt={''}/>
                            <GoogleLogin
                                onSuccess={(credentialResponse : any)  => {
                                    var decoded = jwt_decode(credentialResponse.credential)
                                    loginWithGoogle(decoded, credentialResponse.credential);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>
                    </div>
                </GoogleOAuthProvider>
                <span className={styles.text} >Нет аккаунта? <span className={styles.link} onClick={() => setAuth(1)}>Регистрация</span></span>
            </div>
        </>
    )
}

export default Login