import React, { useContext } from 'react';
import styles from "./LoginRight.module.scss";
import Button from "../../common/Button";
import Arrows from "../../../../public/img/svg/Arrows";
import { Context } from '../../../../pages/_app';
import { useDispatch } from 'react-redux';
import { open } from '../../../../features/Popup/PopupAuthSlice'
import { observer } from 'mobx-react-lite';

const LoginRight = () => {

  const {mobxStore} = useContext(Context);
  const dispatch = useDispatch()

  if(mobxStore.user.email) {
    return null
  }
  
  return (
    <div className={styles.loginRight}>
      <div className={styles.arrows}>
        <Arrows />
      </div>
      <p className={styles.title}>Войдите в свой аккаунт чтобы расширить функционал</p>
      <div className={styles.container}>
        <Button type={'primary'} clb={() => dispatch(open())} full={true} size={''}>Войти</Button>
      </div>
    </div>
  );
};

export default observer(LoginRight);
