import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../../pages/_app';
import styles from "./MainSettingsBlock.module.scss"
import { useRouter } from 'next/router';
import Arrow from '../../../../public/img/svg/Arrow';
import NewInput from '../ProfileBlock/ui/NewInput';
import PremiumBlock from './ui/PremiumBlock';
import Link from 'next/link';
import NewDropMenu from '../ProfileBlock/ui/NewDropMenu';
import { observer } from 'mobx-react-lite';

const MainSettingsBlock = () => {

    const router = useRouter();

    const {mobxStore} = useContext(Context);

    const [email, setEmail] = useState(mobxStore?.user?.email)
    const [mainColor, setMainColor] = useState()

    let dataBlog = [
      {
        value: 'Розовый',
        type: 'pink'
      },
      {
        value: 'Красный',
        type: 'red'
      },
      {
        value: 'Зеленый',
        type: 'green'
      },
      {
        value: 'Синий',
        type: 'blue'
      },
      {
        value: 'Фиолетовый',
        type: 'gamecust'
      },
    ]

    const changeColor = (value : any) => {
      document.body.removeAttribute('red');
      document.body.removeAttribute('pink');
      document.body.removeAttribute('green');
      document.body.removeAttribute('blue');
      document.body.removeAttribute('gamecust');
      if (value == 'red') {
        localStorage.setItem('color', 'red');
        document.body.setAttribute('red', '');
      } else if (value == 'pink') {
        localStorage.setItem('color', 'pink');
        document.body.setAttribute('pink', '');
      } else if (value == 'green') {
        localStorage.setItem('color', 'green');
        document.body.setAttribute('green', '');
      } else if (value == 'blue') {
        localStorage.setItem('color', 'blue');
        document.body.setAttribute('blue', '');
      } else if (value == 'gamecust') {
        localStorage.setItem('color', 'gamecust');
        document.body.setAttribute('gamecust', '');
      }
      setMainColor(value);
    }

    const saveHandler = () => {
      mobxStore.reSaveUser({id: mobxStore.user.id});
    }

    useEffect(() => {
      let color = localStorage.getItem('color') || 'gamecust' as any
      setMainColor(color)
      setEmail(mobxStore.user.email)
    }, [mobxStore.user])

    return mobxStore.user && (
        <div className={styles.container}>
          <div onClick={() => router.back()} className={styles.topBar}>
            <Arrow/>
          </div>
          <div className={styles.mainBlocks}>
            <div className={styles.first}>
                <NewInput title={'Почта и пароль'} value={email} setValue={setEmail}/>
                <Link href={'/settings/main'} className={styles.changePassword}>Изменить пароль</Link>
            </div>
            <NewDropMenu data={dataBlog} title={'Выбери акцентный цвет сайта'} value={mainColor} setValue={changeColor}/>
            <PremiumBlock />
            <button onClick={() => saveHandler()} className={styles.buttonCustom}>Сохранить</button>
          </div>
        </div>
      )
}

export default observer(MainSettingsBlock)