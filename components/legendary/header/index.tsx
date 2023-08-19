import React, {useContext, useRef} from 'react';
import styles from './header.module.scss'
import Input from "../input";
import UserSection from "../UserSection";
import Logotype from "../common/Logotype";
import UnAuthProfile from "../UnAuthProfile";
import { observer } from 'mobx-react';
import { Context } from '../../../pages/_app';
import PenCreate from './ui/PenCreate';

const Header = () => {

  const {mobxStore} = useContext(Context);

  return (
    <div className={styles.header}>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <Logotype />
        </div>
        <div className={styles.middleColumn}>
          <Input placeholder={'Поиск'} width={300}/>
        </div>
        <div className={styles.rightColumn}>
          <a className={styles.penCreate}>
            <PenCreate />
          </a>
          <div className={styles.profile}>
            {
              mobxStore?.user?.email ? (
                <UserSection />
              ) : (
                <>
                  {
                    mobxStore.isLoading ? (
                      ''
                    ) : (
                      <UnAuthProfile />
                    )
                  }
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Header);
