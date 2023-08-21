import React from 'react'
import styles from "./Drafts.module.scss"
import DraftItem from './DraftItem'
import Empty from '../../../common/Empty';

const Drafts = ({data} : any) => {
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

export default Drafts