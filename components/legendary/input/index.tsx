import React, {useState} from 'react';
import styles from './input.module.scss'

const Input = () => {

  const [focus, setFocus] = useState(false)

  return (
    <input
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      placeholder={"Поиск"}
      className={`${styles.search} ${focus && styles.active}`}
      type="text"/>
  );
};

export default Input;
