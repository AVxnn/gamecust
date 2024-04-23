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
import bgimage from "../../../../../public/img/bgimage.png";
import IconHandler from "../../../common/PostPreview/common/IconHandler";

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
        <Link href={`/profile/${data._id}`}>
          <div className={styles.left}>
            <div className={styles.avatar}>
              <div
                style={{ borderColor: checkColor(data.level).color }}
                className={styles.images}
              >
                <Image layout={"fill"} src={data.avatarPath} alt="ads" />
              </div>
            </div>
            <span className={styles.name}>
              <span>{data.username}</span>
              <IconHandler className={styles.icon} user={data} />
            </span>
          </div>
        </Link>
        {/* {data.level >= 0 ? (
          <span className={styles.rating}>
            <Trand /> {data.exp}
          </span>
        ) : (
          <span className={styles.add}>
            <Plus />
          </span>
        )} */}
      </header>

      <div className={styles.images}>
        <div key={index} className={styles.contImg}>
          <Image
            layout={"fill"}
            className={styles.img}
            src={data.bgPath || bgimage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UserItem;
