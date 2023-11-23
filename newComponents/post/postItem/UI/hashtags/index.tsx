import React from 'react'
import styles from "./hashtags.module.scss"
import Tag from '../../../../../components/legendary/common/Tag';

const Hashtags = ({ tags } : any) => {
  return (
    <>
      {tags?.length ? (
      <section className={styles.tags}>
        {tags.map((item: any, index: number) => {
          return (
            <Tag key={index} data={item}>
              {item.title}
            </Tag>
          );
        })}
      </section>
    ) : null}
    </>
  )
}

export default Hashtags