import React from 'react';
import styles from './Button.module.scss'
import cn from "classnames";

interface MainButtonProps {
  children?: React.ReactChild | React.ReactNode;
  type?: 'secondary' | 'primary' | 'specials' | string,
  size?: 'small' | 'big' | 'giant' | string,
  disabled?: boolean,
  clb?: React.MouseEventHandler,
  full?: boolean
}

const Button = ({children, clb = () => '', type = 'secondary', size = 'small', full, disabled} : MainButtonProps) => {

  return (
    <>
      <button
        onClick={clb}
        disabled={disabled}
        className={cn(styles[type], styles[size], full && styles.full)}>
        {children}
      </button>
    </>
  );

};

export default Button;
