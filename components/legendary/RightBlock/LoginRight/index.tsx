import React from 'react';
import styles from "./LoginRight.module.scss";
import Button from "../../common/Button";
import Arrows from "../../../../public/img/svg/Arrows";

const LoginRight = () => {
  return (
    <div className={styles.loginRight}>
      <div className={styles.arrows}>
        <Arrows />
      </div>
      <p className={styles.title}>Войдите в свой аккаунт чтобы расширить функционал</p>
      <div className={styles.container}>
        <Button type={'primary'} full={true} size={''}>Войти</Button>
      </div>
    </div>
  );
};

export default LoginRight;
