import React from 'react';
import styles from './header.module.scss'
import Input from "../input";
import UserSection from "../UserSection";
import Layout from "../../layout";
import Logotype from "../common/Logotype";

const Header = () => {
  return (
    <div className={styles.header}>
      <Layout>
        <div className={styles.leftColumn}>
          <Logotype />
        </div>
        <div className={styles.middleColumn}>
          <Input width={300}/>
        </div>
        <div className={styles.rightColumn}>
          <UserSection />
        </div>
      </Layout>
    </div>
  );
};

export default Header;
