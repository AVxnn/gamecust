import Head from 'next/head'
import React from 'react'
import Header from '../components/legendary/header'
import MainLayout from '../components/layout/MainLayout'
import ErrorFour from '../components/legendary/MiddleBlock/ErrorFour'

const FourOhFour = () => {
  return (
    <>
        <Head>
            <title>GameCust</title>
            <meta name="description" content="Социальная сеть для геймеров и гиков с разных областей!" />
            <meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />\
            <link rel="stylesheet" type="text/css" charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        </Head>
        <Header />
        <ErrorFour />
    </>
  )
}

export default FourOhFour