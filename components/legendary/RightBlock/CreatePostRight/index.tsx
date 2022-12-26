import React from 'react';
import styles from './CreatePostRight.module.scss'
import Notepad from "../../../../public/img/svg/Notepad";

const CreatePostRight = () => {
  return (
    <div className={styles.createPost}>
      <div className={styles.header}>
        <h4 className={styles.title}>Создай пост</h4>
        <span className={styles.notepad}> <Notepad /> Черновик(2)</span>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.img}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.045 7.401C19.423 7.023 19.631 6.521 19.631 5.987C19.631 5.453 19.423 4.951 19.045 4.573L17.459 2.987C17.081 2.609 16.579 2.401 16.045 2.401C15.511 2.401 15.009 2.609 14.632 2.986L4 13.585V18H8.413L19.045 7.401ZM16.045 4.401L17.632 5.986L16.042 7.57L14.456 5.985L16.045 4.401ZM6 16V14.415L13.04 7.397L14.626 8.983L7.587 16H6ZM4 20H20V22H4V20Z" fill="white"/>
            </svg>
          </div>
          <span className={styles.text}>Пост</span>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5H17V12H19V5C19 3.897 18.103 3 17 3H4C2.897 3 2 3.897 2 5V17C2 18.103 2.897 19 4 19H12V17H4V5Z" fill="white"/>
              <path d="M8 11L5 15H16L12 9L9 13L8 11Z" fill="white"/>
              <path d="M19 14H17V17H14V19H17V22H19V19H22V17H19V14Z" fill="white"/>
            </svg>
          </div>
          <span className={styles.text}>Фото</span>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 8H9V11H6V13H9V16H11V13H14V11H11V8Z" fill="white"/>
              <path d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7ZM16.001 17H4V7H16V12L16.001 17Z" fill="white"/>
            </svg>

          </div>
          <span className={styles.text}>Видео</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePostRight;
