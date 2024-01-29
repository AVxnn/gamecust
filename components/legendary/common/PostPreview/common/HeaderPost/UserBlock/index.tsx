import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from "./UserBlock.module.scss"
import Dots from '../../../../../../../public/img/svg/Dots';
import Edit from '../../../../../../../public/img/svg/Edit';
import Trash from '../../../../../../../public/img/svg/Trash';
import Link from 'next/link';
import { Context } from '../../../../../../../pages/_app';
import { useRouter } from 'next/navigation';
import LinkIcon from '../../../../../../../public/img/svg/LinkIcon';

const UserBlock = ({ postId, data }: any) => {
    const [isDropOpen, setIsDropOpen] = useState<boolean>(false)
    const Button = useRef<HTMLDivElement>(null);

    const {mobxStore, postCreateStore, notificationStore} = useContext(Context);
    
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

    const copyClick = () => {
        notificationStore.addItem({title: 'Ссылка вставлена в буфер обмена', status: 'success', timeLife: 2500})
        navigator.clipboard.writeText(`https://gamecust.online/post/${postId}`).then(function() {
            console.log('Текст успешно скопирован в буфер обмена');
        }, function(err) {
            console.error('Произошла ошибка при копировании текста: ', err);
        });
    }

    return (
        <div ref={Button} className={`${styles.container} ${isDropOpen ? styles.active : ''}`}>
            <button onMouseEnter={() => setIsDropOpen(true)} className={styles.button}>
                <Dots />
            </button>
            {
                isDropOpen && (
                    <div className={styles.dropMenu}>
                        <span onClick={() => copyClick()} className={styles.dropItem}>
                            <LinkIcon />
                            <span>Копировать ссылку</span>
                        </span>
                        <Link href={`tg://msg_url?text=${data.stared.filter((item : any) => item.type == 'h1')[0]?.value}&url=https://gamecust.online/post/${postId}`} className={styles.dropItem}>
                            <span>Telegram</span>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default UserBlock