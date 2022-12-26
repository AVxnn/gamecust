import React from 'react';
import styles from './Button.module.scss'

const Button = ({children, type, size, full} : any) => {

  if (type == 'primary') {
    return (
      <button className={`${styles.primary} ${size === 'big' ? styles.big : size === 'small' ? styles.small : ''} ${full && styles.full}`}>
        {children}
      </button>
    );
  }
  if (type == 'secondary') {
    return (
      <button className={`${styles.secondary} ${size === 'big' ? styles.big : size === 'small' ? styles.small : ''} ${full && styles.full}`}>
        {children}
      </button>
    );
  }
  return (
    <button className={`${styles.button} ${size === 'big' ? styles.big : size === 'small' ? styles.small : ''} ${full && styles.full}`}>
      {children}
    </button>
  );
};

export default Button;
