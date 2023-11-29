import React, { useContext } from 'react'
import styles from "./NotificationItem.module.scss"
import Check from '../../../../../public/img/svg/Check'
import { motion } from 'framer-motion'
import { Context } from '../../../../../pages/_app'
import { observer } from 'mobx-react'
import Plus from '../../../../../public/img/svg/Plus'

const NotificationItem = ({ item } : any) => {

    const {notificationStore} = useContext(Context);

    const closeItem = () => {
        notificationStore.deleteItem(item)
    }

    return (
        <>
            <div onClick={() => closeItem()}
                 className={`${styles.notificationItem} ${styles[item?.status]}`}>
                <div className={styles.icon}>
                    <div className={styles.bg}>
                    {
                        item?.status == 'success' ? (
                            <Check />
                        ) : ''
                    }
                    {
                        item?.status == 'error' ? (
                            <Plus />
                        ) : ''
                    }
                    </div>
                </div>
                <p className={styles.title}>{item?.title}</p>
            </div>
        </>
    )
}

export default observer(NotificationItem)