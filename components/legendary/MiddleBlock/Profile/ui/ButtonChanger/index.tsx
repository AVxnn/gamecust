import React, { useEffect, useRef, useState } from 'react'
import Arrow from '../../../../../../public/img/svg/Arrow';
import styles from "./ButtonChanger.module.scss"
import Link from 'next/link';

 const ButtonChanger = () => {

    const [isDropOpen, setIsDropOpen] = useState<boolean>(false)

    const Button = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (Button.current) {
            Button.current.addEventListener("mouseenter", () => setIsDropOpen(true));
            Button.current.addEventListener("mouseleave", () => setIsDropOpen(false));
            }
        
            return () => {
            if (Button.current) {
                Button.current.removeEventListener("mouseenter", () => setIsDropOpen(true));
                Button.current.removeEventListener("mouseleave", () => setIsDropOpen(false));
            }
        };
    })

    return (
        <div ref={Button} className={`${styles.container} ${isDropOpen ? styles.active : ''}`}>
            <button onMouseEnter={() => setIsDropOpen(true)} className={styles.button}>
                Изменить <Arrow />
            </button>
            {
                isDropOpen && (
                    <div className={styles.dropMenu}>
                        <Link href={'/settings/profile'} className={styles.dropItem}>
                            Редактировать профиль
                        </Link>
                        <Link href={'#'} className={styles.dropItem}>
                            Изменить фоновое изображение
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default ButtonChanger;