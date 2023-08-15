import React, { useContext } from 'react'
import styles from "./SetCategory.module.scss"
import { Context } from '../../../../../../../../pages/_app';

const SetCategory = ({setPage} : any) => {

    const { popupHandlers } = useContext(Context);

    return (
        <>
            <h2 className={styles.title}>Выбери категории</h2>
            <div className={styles.container}>
                <p className={styles.title}>Скоро</p>
            </div>
            <input className={styles.button} onClick={() => popupHandlers.authPopupClose()} type="button" value={'Завершить регистрацию'} />
        </>
    )
}

export default SetCategory