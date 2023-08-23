import React, { useContext, useEffect } from 'react'
import styles from "./Drafts.module.scss"
import DraftItem from './DraftItem'
import Empty from '../../../common/Empty';
import { Context } from '../../../../../pages/_app';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';

const Drafts = ({data, user} : any) => {

    const {mobxStore} = useContext(Context);

    const router = useRouter()

    useEffect(() => {
        if (mobxStore.user.id !== user._id) {
            router.back()
        }
    }, [data, mobxStore])

    return (
        <>
            {
                data.length ? (
                    <div className={styles.drafts}>
                        {
                            data.map((item : any, index : number) => {
                                return (
                                    <DraftItem key={index} data={item} />
                                )
                            })
                        }
                    </div>
                ) : <Empty text={'Похоже тут пусто ;('} />
            }
        </>
    )
}

export default observer(Drafts);