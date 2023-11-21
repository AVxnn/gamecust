import React from 'react'
import styles from "./customInput.module.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
  typeInput: 'default' | 'secondary'
  sizeInput: "m" | 's'
  className?: string;
  id?: string;
  Name?: string;
  ILink?: string;
  errors?: any
  touched?: any
  style?: any;
};
 
const CustomInput = ({ full = false, Name, sizeInput, errors, touched, typeInput, ...attributes}: InputProps) => {
    return (
      <div className={styles.containerInput}>
        <input className={`${styles.customInput} ${styles[typeInput]} ${styles[sizeInput]} ${full ? styles.width : ''} ${touched && errors ? styles.error : ''}`} {...attributes}/>
        {touched && errors ? (
          <div className={`${errors ? styles.errorText : ''}`}>
            {/* <CheckIconInput error={errors} warning={''} success={''} blocked={''} /> */}
            {errors}
          </div>
        ) : ''}
      </div>
    );
}

export default CustomInput