import React from 'react'
import SettingsLayout from '../../../components/layout/SettingsLayout'
import Header from '../../../components/legendary/header'
import Head from 'next/head'
import ProfileBlock from '../../../components/legendary/MiddleBlock/ProfileBlock'

const ProfileSettings = () => {
  return (
    <>
        <Head>
            <title>Настройки | GameCust</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />\
            <link rel="stylesheet" type="text/css" charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            <link rel="shortcut ico" href="../public/favicon.svg" />
        </Head>
        <Header />
        <SettingsLayout>
            <ProfileBlock />
        </SettingsLayout>
    </>
  )
}

export default ProfileSettings