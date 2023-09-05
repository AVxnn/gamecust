import React from 'react'
import styles from "./ErrorFour.module.scss"

const ErrorFour = () => {
  return (
    <>
        <div className={styles.info}>
            <h2>Ошибка 404</h2>
            <span>Страница не найдена</span>
        </div>
    </>
  )
}

export default ErrorFour