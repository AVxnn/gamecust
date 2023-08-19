import React, { useContext } from 'react'
import styles from "./Subscriptions.module.scss"
import { Context } from '../../../../pages/_app';
import ItemSub from './ItemSub';
import { observer } from 'mobx-react';

const Subscriptions = ({user} : any) => {
    
    return (
        <div className={styles.subs}>
            <h3 className={styles.title}>Подписки <span>{user ? user?.subscriptions?.length : ''}</span></h3>
            <div>
                {
                    user && user.subscriptions?.map((item: any, index: number) => (
                        <>
                            <ItemSub user={item} key={index} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default observer(Subscriptions)