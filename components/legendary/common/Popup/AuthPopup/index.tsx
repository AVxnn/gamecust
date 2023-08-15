import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './AuthPopup.module.scss'
import Image from 'next/image'
import Registration from './ui/Registration';
import Login from './ui/Login';
import { Context } from '../../../../../pages/_app';
import { observer } from 'mobx-react';

const AuthPopup = () => {

    const labelRef = useRef<HTMLElement>(null) as any;
    const {popupHandlers} = useContext(Context);
    const [auth, setAuth] = useState(0)
    if (!popupHandlers.authPopup) {
        return <></>
    }

    return (
        <>
            <div onClick={() => popupHandlers.authPopupClose()} className={styles.authPopup}>
                <div onClick={(e) => e.stopPropagation()} ref={labelRef} className={styles.container}>
                    <div className={styles.leftBlock}>
                        <Image objectFit='cover' src='https://img.freepik.com/free-vector/hand-drawn-japanese-wave-pattern-illustration_23-2149522572.jpg' layout='fill' alt='' />
                    </div>
                    {
                        auth == 1 ? (
                            <Registration setAuth={setAuth} />
                        ) : (
                            <Login setAuth={setAuth} />
                        )
                    }
                </div>
            </div>
        </>
    )
};

export default observer(AuthPopup);
