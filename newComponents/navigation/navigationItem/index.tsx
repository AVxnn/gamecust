import React from "react";
import styles from "./navigationItem.module.scss";
import Link from "next/link";

const NavigationItem = ({
  icon,
  title,
  link,
  type,
  current,
  ...props
}: any) => {
  return (
    <Link href={link}>
      <button
        className={`${styles.tab} ${current && styles.active}`}
        {...props}
      >
        <div className={styles[type]}>{icon}</div>
        <span>{title}</span>
      </button>
    </Link>
  );
};

export default NavigationItem;
