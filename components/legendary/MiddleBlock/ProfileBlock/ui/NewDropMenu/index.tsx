import React, { useEffect, useRef, useState } from 'react'
import styles from "./NewDropMenu.module.scss"
import Arrow from '../../../../../../public/img/svg/Arrow'

const NewDropMenu = ({ data, title, value, setValue} : any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const [dropMenu, setDropMenu] = useState(false)

    const handleClickOutside = (e: any) => {
        if (dropMenu) {
            if (labelRef.current &&
                !labelRef.current.contains(e.target)) {
                    setDropMenu(false)
            }
        }
    }
    
    useEffect(() => {
        if (typeof document !== "undefined" && dropMenu) {
            document.addEventListener('click', (e: any) => {
            handleClickOutside(e);
            })
            return document.removeEventListener('click', (e: any) => {
                handleClickOutside(e);
            })
        }
    })
    console.log(data.filter((e : any) => e.type == value));
    
    return (
        <>
            <div className={styles.newDropMenu}>
                <p className={styles.title}>{title}</p>
                <div className={styles.dropContent}>
                    <div ref={labelRef} className={`${styles.container} ${dropMenu ? styles.active : ''}`} onClick={() => setDropMenu(true)}>
                        <span className={styles.input}>{data.filter((e : any) => e.type == value)[0]?.value}</span>
                        <Arrow />
                    </div>
                    {
                        dropMenu ? (
                            <div className={styles.dropMenu} ref={popupRef}>
                                {
                                    data.map((item : any, index : any) => (
                                        <div key={index} onClick={() => setValue(item.type)} className={styles.item}>
                                            {item.value}
                                        </div>
                                    ))
                                }
                            </div>
                        ) : null

                    }
                </div>
            </div>
        </>
    )
}

export default NewDropMenu