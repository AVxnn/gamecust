import React, { useContext, useState } from 'react'
import styles from "./PremiumSettingsBlock.module.scss"
import { useRouter } from 'next/router';
import { Context } from '../../../../pages/_app';
import Arrow from '../../../../public/img/svg/Arrow';
import Image from "next/image"
import animationGif from "../../../../public/img/Alien.gif"
import Premium from '../../../../public/img/svgIcons/Premium';
import Beta from '../../../../public/img/svg/Beta';
import Heart from '../../../../public/img/svg/Heart';
import Link from 'next/link';

const PremiumSettingsBlock = () => {
    const router = useRouter();

    const {mobxStore} = useContext(Context);

    const [email, setEmail] = useState(mobxStore?.user?.email)
    const [gamePlus, setGamePlus] = useState(mobxStore?.user?.username)


    const saveHandler = () => {
        mobxStore.reSaveUser({id: mobxStore.user.id});
    }

    return mobxStore.user && (
        <div className={styles.container}>
          <div onClick={() => router.back()} className={styles.topBar}>
            <Arrow/>
          </div>
          <div className={styles.mainBlocks}>
            <div className={styles.first}>
                <Premium />
                <h3 className={styles.title}>Подписка Plus</h3>
                <p className={styles.subtitle}>Поддержка проекта и доступ <br /> к дополнительным преимуществам.</p>
            </div>
            <div className={styles.infoblock}>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image layout='fill' src={animationGif} alt={''}/>
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Видеоаватарка</h3>
                        <p className={styles.subtitle}>Установите аватарка в формате gif</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}>
                        <Beta />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Доступ к бета тесту</h3>
                        <p className={styles.subtitle}>Возможность использовать ограниченный функционал</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}>
                        <Premium />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Премиальная иконка</h3>
                        <p className={styles.subtitle}>Выделись среди пользователей коллекционной иконкой</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}>
                        <Heart />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Поддержка сайта</h3>
                        <p className={styles.subtitle}>Вы помогаете оплачивать сервер и кофе разработчика</p>
                    </div>
                </li>
            </div>
            <div className={styles.bottom}>
                <span className={styles.text}>Нажимая кнопку, вы принимаете <br /> <Link href={'/'}>условия соглашения</Link>.</span>
                <button className={styles.button}>
                    Месяц за 69 ₽
                </button>
            </div>
          </div>
        </div>
      )
}

export default PremiumSettingsBlock