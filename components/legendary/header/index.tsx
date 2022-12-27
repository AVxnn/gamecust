import React, {useState} from 'react';
import styles from './header.module.scss'
import Input from "../input";
import UserSection from "../UserSection";
import Layout from "../../layout";
import Logotype from "../common/Logotype";
import UnAuthProfile from "../UnAuthProfile";

const Header = () => {

  const [auth, setAuth] = useState(true)

  return (
    <div className={styles.header}>
      <Layout>
        <div className={styles.leftColumn}>
          <Logotype />
        </div>
        <div className={styles.middleColumn}>
          <Input placeholder={'Поиск'} width={300}/>
        </div>
        <div className={styles.rightColumn}>
          {
            auth ? (
              <UserSection />
            ) : (
              <UnAuthProfile />
            )
          }
        </div>
      </Layout>
    </div>
  );
};

export default Header;
