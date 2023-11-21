import React from 'react'
import Head from 'next/head'
import styles from "./settings.module.scss"
import Header from '../../components/legendary/header'
import SettingsLayout from '../../components/layout/SettingsLayout'
import SettingsNavigation from '../../components/legendary/MiddleBlock/SettingsNavigation'
import ProfileBlock from '../../components/legendary/MiddleBlock/ProfileBlock'

const ProfileSettings = () => {
  return (
    <>
        <Head>
            <title>Настройки | GameCust</title>
            <meta name="description" content="Социальная сеть для геймеров и гиков с разных областей!" />
            <meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />\
            <link rel="stylesheet" type="text/css" charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            <link rel="shortcut ico" href="../public/favicon.svg" />
        </Head>
        <Header />
        <SettingsLayout>
            <div className={styles.desktop}>
                <ProfileBlock />
            </div>
            <div className={styles.mobile}>
                <SettingsNavigation />
            </div>
        </SettingsLayout>
    </>
  )
}

export default ProfileSettings