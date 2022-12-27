import React, {useState} from 'react';
import styles from './input.module.scss'

const Input = ({children, placeholder, type, size, full, width} : any) => {

  const [focus, setFocus] = useState(false)

  return (
    <div className={`${styles.containerInput}`}>
      {
        children && (
          <span className={styles.title}>{children}</span>
        )
      }
      <input
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        style={{width: `${width}px`}}
        placeholder={placeholder && placeholder}
        className={`${styles.search} ${focus && styles.active} ${size == 'big' ? styles.big : size == 'small' ? styles.small : ''}`}
        type="text"/>
    </div>
  );
};

export default Input;
