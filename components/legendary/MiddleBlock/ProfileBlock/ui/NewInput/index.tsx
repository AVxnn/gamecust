import React from 'react'
import styles from './NewInput.module.scss'

const NewInput = ({ title, value, setValue, click, maxValue = 0} : any) => {

    const changeHandler = (value: any) => {
        if (value.length > maxValue) {
            
        } else {
            setValue(value)
        }
    }

    return (
        <>
            <div className={styles.newInput}>
                <p className={styles.title}>{title}</p>
                <div className={styles.container}>
                    <input className={styles.input} type="text" value={value} onChange={(e) => changeHandler(e.currentTarget.value)}/>
                    {
                        maxValue ? <span className={styles.maxValue}>{maxValue - value?.length}</span> : ''
                    }
                </div>
            </div>
        </>
    )
}

export default NewInput