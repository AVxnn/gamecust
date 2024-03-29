import React, { useEffect, useRef, useState } from "react";
import styles from "./logotype.module.scss";
import LogotypeIcon from "../../../../public/img/svg/Logotype";
import Link from "next/link";

const Logotype = () => {
  const [showFixedMenu, setShowFixedMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (
          menuRef.current &&
          menuRef.current.getBoundingClientRect().top <= 4
        ) {
          setShowFixedMenu(true);
        } else {
          setShowFixedMenu(false);
        }
      });
    }
  });

  return (
    <>
      <Link href={"/"}>
        <div ref={menuRef} className={styles.logotype}>
          <LogotypeIcon small={false} />
        </div>
        <div ref={menuRef} className={styles.smallLogotype}>
          <LogotypeIcon small={true} />
        </div>
      </Link>
    </>
  );
};

export default Logotype;
