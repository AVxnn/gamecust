import React from 'react'
import Layout from '../../components/layout'
import Header from '../../components/legendary/header'
import Head from 'next/head'
import PrivacyInfo from '../../components/legendary/MiddleBlock/PrivacyInfo'

const privacy = () => {
  return (
    <>
        <Head>
            <title>Политика конфиденциальности | GameCust</title>
            <meta name="description" content="Социальная сеть для геймеров и гиков с разных областей!" />
            <meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />\
            <link rel="stylesheet" type="text/css" charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            <link rel="icon" href="" />
        </Head>
        <Header />
        <Layout>
            <PrivacyInfo />
        </Layout>
    </>
  )
}

export default privacy