import React, {useEffect, useRef, useState} from 'react';
import styles from "../../header/header.module.scss";
import LogotypeIcon from '../../../../public/img/svg/Logotype'
import Link from "next/link";

const Logotype = () => {

  const [showFixedMenu, setShowFixedMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {

        if (menuRef.current && menuRef.current.getBoundingClientRect().top <= 4) {
          setShowFixedMenu(true)
        } else {
          setShowFixedMenu(false)
        }
      })
    }
  })

  return (
    <>
      <div ref={menuRef} className={styles.logotype}>
        <Link href={'/'}>
          <LogotypeIcon />
        </Link>
      </div>
    </>
  );
};

export default Logotype;
