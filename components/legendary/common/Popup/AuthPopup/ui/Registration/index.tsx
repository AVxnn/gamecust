import React, { useContext, useState } from 'react'
import styles from "./Registration.module.scss"
import { Context } from '../../../../../../../pages/_app';
import InputCustom from '../../../../PostPreview/common/InputCustom';
import { motion } from 'framer-motion';
import SetAvatar from './SetAvatar';
import SetCategory from './SetCategory';

const Registration = ({setAuth} : any) => {

    const [page, setPage] = useState<number>(0);

    const [username, setUsername] = useState<any>({
        username: '',
        error: '',
    })
    const [email, setEmail] = useState<any>({
        email: '',
        error: '',
    })
    const [password, setPassword] = useState<any>({
        password: '',
        error: '',
    })

    const {mobxStore, notificationStore} = useContext(Context);
    function validateEmail(value : string) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (re.test(String(value).toLowerCase())) {
            setEmail({error: '', email: value})
        } else {
            setEmail({error: 'Неправильная почта', email: value})
        }
    }

    function validateUsername(value : string) {
        var re = /[0-9a-zA-Z!@#$%^&*]{4,}/g;
        console.log(username.error);
        if (re.test(String(value).toLowerCase())) {
            setUsername({error: '', username: value})
        } else {
            setUsername({error: 'Никнейм короткий', username: value})
        }
    }

    function validatePassword(value : string) {
        var re = /(?=.*[a-z])[0-9a-zA-Z*]{6,}/g;
        let score = 0
        if (re.test(String(value))) {
            setPassword({error: 3, password: value})
        } else {
            setPassword({error: 0, password: value})
        }
        if ((/[0-9a-zA-Z!@#$%^&*]{6,}/g).test(String(value))) {
            score = score + 30;
        }
        if ((/(?=.*[A-Z])/g).test(String(value))) {
            score = score + 30;
        }
        if ((/(?=.*[0-9])/g).test(String(value))) {
            score = score + 40;
        }
        setPassword({password: value, error: score})
    }

    const registration = () => {
        if (!email.error && password.error >= 30 && (/[0-9a-zA-Z!@#$%^&*]{6,}/g).test(String(password.password)) && !username.error) {
            // mobxStore.registration(username.username, email.email, password.password)
            notificationStore.addItem({title: 'Аккаунт зарегистрирован', status: 'success', timeLife: 2500})
            setPage(1)
        }
    }

    return (
        <>
            <div className={styles.rightBlock}>
                <div className={styles.topBar} >
                    {
                        [0,1,2].map((e, index) => (
                            <div key={index} className={`${page == index ? styles.lineProgress : page > e ? styles.lineFull : styles.line}`}></div>
                        ))
                    }
                </div>
                {
                    page == 0 && (
                        <>
                            <motion.div className={styles.container}>
                                <h2 className={styles.title}>Регистрация</h2>
                                <InputCustom value={username.username} error={username.error} onChange={validateUsername} type={'text'} placeholder={'Username'}/>
                                <InputCustom value={email.email} error={email.error} onChange={validateEmail} type={'email'} placeholder={'Email'}/>
                                <InputCustom value={password.password} statusBar={password.error} onChange={validatePassword} type={'password'} placeholder={'Password'}/>
                                
                                <input className={styles.button} onClick={() => registration()} type="button" value={'Регистрация'} />
                                <span className={styles.text} onClick={() => setAuth(0)}>Есть аккаунт? <span className={styles.link}>Войти</span></span>
                            </motion.div>
                        </>
                    )
                }
                {
                    page == 1 && (
                        <SetAvatar setPage={setPage}/>
                    )
                }
                {
                    page == 2 && (
                        <SetCategory setPage={setPage}/>
                    )
                }
            </div>
        </>
    )
}

export default Registration