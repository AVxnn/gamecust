import React from 'react'
import styles from "./Drafts.module.scss"
import DraftItem from './DraftItem'

const Drafts = ({data} : any) => {
  return (
    <>
        <div className={styles.drafts}>
            {
                data && data.map((item : any, index : number) => {
                    return (
                        <DraftItem key={index} data={item} />
                    )
                })
            }
        </div>
    </>
  )
}

export default Drafts