import React, { useState } from "react";
import styles from "./UserItem.module.scss";
import CheckIcon from "../../../../../public/img/svg/CheckIcon";
import Trand from "../../../../../public/img/svg/Trand";
import Plus from "../../../../../public/img/svg/Plus";
import Image from "next/image";
import {
  checkColor,
  checkLevel,
} from "../../../../../newComponents/componentColors/checkColor";
import Link from "next/link";

const UserItem = ({ data, index, get, set }: any) => {
  const [anim, setAnim] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        set(index);
      }}
      className={`${styles.item} ${get === index && styles.activeItem}`}
    >
      <header className={styles.header}>
        <Link href={`/nv/profile/${data._id}`}>
          <div className={styles.left}>
            <div className={styles.avatar}>
              <div
                style={{ borderColor: checkColor(data.level).color }}
                className={styles.images}
              >
                <Image layout={"fill"} src={data.avatarPath} alt="ads" />
              </div>
              <span
                style={{ backgroundColor: checkColor(data.level).color }}
                className={styles.number}
              >
                {checkLevel(data.exp)?.lvl}
              </span>
            </div>
            <span className={styles.name}>
              <span>{data.username}</span> <CheckIcon />
            </span>
          </div>
        </Link>
        {data.level >= 0 ? (
          <span className={styles.rating}>
            <Trand /> {data.exp}
          </span>
        ) : (
          <span className={styles.add}>
            <Plus />
          </span>
        )}
      </header>
      {data.bgPath && (
        <div className={styles.images}>
          <div key={index} className={styles.contImg}>
            <Image
              layout={"fill"}
              className={styles.img}
              src={data.bgPath}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserItem;
