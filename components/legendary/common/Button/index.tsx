import React from 'react';
import styles from './Button.module.scss'

const Button = ({children, clb = () => '', type, size, full} : any) => {

  if (type == 'primary') {
    return (
      <button onClick={() => clb()} className={`${styles.primary} ${size === 'big' ? styles.big : size === 'small' ? styles.small : ''} ${full && styles.full}`}>
        {children}
      </button>
    );
  }
  if (type == 'secondary') {
    return (
      <button onClick={() => clb()} className={`${styles.secondary} ${size === 'big' ? styles.big : size === 'small' ? styles.small : ''} ${full && styles.full}`}>
        {children}
      </button>
    );
  }
  return (
    <button onClick={() => clb()} className={`${styles.button} ${size === 'big' ? styles.big : size === 'small' ? styles.small : ''} ${full && styles.full}`}>
      {children}
    </button>
  );
};

export default Button;
