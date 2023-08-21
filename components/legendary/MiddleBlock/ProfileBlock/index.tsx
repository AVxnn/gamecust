import React, { useContext, useState } from 'react'
import styles from "./ProfileBlock.module.scss"
import Arrow from '../../../../public/img/svg/Arrow'
import NewInput from './ui/NewInput'
import NewDropMenu from './ui/NewDropMenu'
import Button from '../../common/Button'
import { useRouter } from 'next/router'
import { Context } from '../../../../pages/_app'
import AvatarChanger from './ui/AvatarChanger'

const ProfileBlock = () => {

  const router = useRouter();

  const {mobxStore} = useContext(Context);

  const [username, setUsername] = useState(mobxStore?.user?.username)
  const [description, setDescription] = useState(mobxStore?.user?.description)
  const [avatarPath, setAvatarPath] = useState(mobxStore?.user?.avatarPath)
  const [privateBlog, setPrivate] = useState(mobxStore?.user?.private) as any

  const saveHandler = () => {
    mobxStore.reSaveUser({id: mobxStore.user.id, username: username, avatarPath: avatarPath, description: description, private: privateBlog});
    console.log('work', {avatarPath: avatarPath});
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

  return mobxStore.user && (
    <div className={styles.container}>
      <div onClick={() => router.back()} className={styles.topBar}>
        <Arrow/>
      </div>
      <div className={styles.mainBlocks}>
        <AvatarChanger setValue={setAvatarPath}/>
        <NewInput title={'Отображаемое имя'} value={username} setValue={setUsername} maxValue={24}/>
        <NewInput title={'Описание к блогу'} value={description} setValue={setDescription} maxValue={32}/>
        <NewDropMenu data={dataBlog} title={'Записи в блоге'} value={privateBlog} setValue={setPrivate}/>
        <button onClick={() => saveHandler()} className={styles.buttonCustom}>Сохранить</button>
      </div>
    </div>
  )
}

export default ProfileBlock