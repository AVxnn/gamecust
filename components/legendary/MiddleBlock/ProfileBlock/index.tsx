import React, { useState } from 'react'
import styles from "./ProfileBlock.module.scss"
import Arrow from '../../../../public/img/svg/Arrow'
import NewInput from './ui/NewInput'
import NewDropMenu from './ui/NewDropMenu'
import Button from '../../common/Button'
import { useRouter } from 'next/router'

const ProfileBlock = () => {

  const router = useRouter();

  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [blog, setBlog] = useState('all') as any

  const changeBlogHandler = (item: any) => {
    setBlog(item.type)
  }

  let dataBlog = [
    {
      value: 'Показывать всем',
      type: 'all'
    },
    {
      value: 'Скрывать от всех',
      type: 'hide'
    }
  ]

  return (
    <div className={styles.container}>
      <div onClick={() => router.back()} className={styles.topBar}>
        <Arrow/>
      </div>
      <div className={styles.mainBlocks}>
        <NewInput title={'Отображаемое имя'} value={username} setValue={setUsername} maxValue={24}/>
        <NewInput title={'Описание к блогу'} value={description} setValue={setDescription} maxValue={32}/>
        <NewDropMenu data={dataBlog} title={'Записи в блоге'} value={blog} setValue={changeBlogHandler}/>
        <button className={styles.buttonCustom}>Сохранить</button>
      </div>
    </div>
  )
}

export default ProfileBlock