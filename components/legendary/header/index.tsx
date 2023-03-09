import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './header.module.scss'
import Input from "../input";
import UserSection from "../UserSection";
import Logotype from "../common/Logotype";
import UnAuthProfile from "../UnAuthProfile";
import Button from "../common/Button";
import Link from "next/link";
import { observer } from 'mobx-react-lite';
import { Context } from '../../../pages/_app';

const Header = () => {

  const [auth, setAuth] = useState(false)
  const [showFixedMenu, setShowFixedMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const {mobxStore} = useContext(Context);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (menuRef.current && menuRef.current.getBoundingClientRect().top <= 7) {
          setShowFixedMenu(true)
        } else {
          setShowFixedMenu(false)
        }
      })
    }
  })

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
          <Link href={'/editor'} className={styles.create}>
            <Button size='small' type={'primary'}>Создать</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default observer(Header);
