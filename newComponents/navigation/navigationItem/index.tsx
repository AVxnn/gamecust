import React from "react";
import styles from "./navigationItem.module.scss";
import Link from "next/link";

const NavigationItem = ({ icon, title, link, current, ...props }: any) => {
  return (
    <Link
      className={`${styles.tab} ${current && styles.active}`}
      href={link}
      {...props}
    >
      <div className={styles.icon}>{icon}</div>
      <span>{title}</span>
    </Link>
  );
};

export default NavigationItem;
