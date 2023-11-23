import React from "react";
import styles from "./navigationItem.module.scss";
import Link from "next/link";

const NavigationItem = ({ icon, title, link, current, ...props }: any) => {
  return (
    <Link href={link}>
      <button
        className={`${styles.tab} ${current && styles.active}`}
        {...props}
      >
        {icon}
        <span>{title}</span>
      </button>
    </Link>
  );
};

export default NavigationItem;
