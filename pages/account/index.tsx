import React from 'react'
import Head from "next/head";
import Header from "../../components/legendary/header";
import Layout from "../../components/layout";
import styles from './Account.module.scss'
import AccountBlock from '../../components/legendary/MiddleBlock/AccountBlock';
import { observer } from 'mobx-react-lite';

const Account = () => {

    return (
        <>
          <Head>
            <title>Аккаунт | GameCust</title>
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
            <div className={styles.middleColumn}>
                <AccountBlock />
            </div>
          </Layout>
        </>
      );
}

export default observer(Account)