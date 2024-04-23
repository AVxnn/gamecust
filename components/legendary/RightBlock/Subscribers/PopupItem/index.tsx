import React, { useEffect, useState } from "react";
import styles from "../ItemSubscriber/ItemSubscriber.module.scss";
import Image from "next/image";
import Link from "next/link";
import ImageLoader from "react-imageloader";
import ContentLoader from "react-content-loader";

function preloader() {
  return (
    <ContentLoader viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" />
    </ContentLoader>
  );
}

const PopupItem = ({ user, close }: any) => {
  const [userData, setUserData] = useState<any>({});
  console.log(user);
  useEffect(() => {
    const getUser = async () => {
      const userData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/getUserId/${user}`
      );
      setUserData(await userData?.json());
    };
    getUser();
  }, [user]);

  return (
    <Link
      onClick={() => {
        close(false);
      }}
      href={`/profile/${userData._id}`}
    >
      <div className={styles.item}>
        <div className={styles.image}>
          <ImageLoader
            className={styles.avatar}
            src={`${user?.avatarPath}`}
            wrapper={React.createFactory("div")}
            preloader={preloader}
          ></ImageLoader>
          <Image layout={"fill"} src={`${userData.avatarPath}`} alt="ads" />
        </div>
        <p className={styles.username}>{userData.username}</p>
      </div>
    </Link>
  );
};

export default PopupItem;
