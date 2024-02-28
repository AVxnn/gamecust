import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ChangeAccount.module.scss";
import Arrow from "../../../../../public/img/svg/Arrow";
import AccountDrop from "./AccountDrop";
import { AnimatePresence, motion } from "framer-motion";
import { Context } from "../../../../../app/(pages)/layout";
import { observer } from "mobx-react-lite";
import getCategories from "../../../../../features/new/getCategories/getCategories";

const ChangeAccount = ({ post }: any) => {
  const { mobxStore, postCreateStore } = useContext(Context);
  const popupRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(post.category);

  const [clicked, setClicked] = useState<boolean>(false);

  const handleClickOutside = (e: any) => {
    if (clicked) {
      if (
        labelRef.current &&
        !labelRef.current.contains(e.target) &&
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setClicked(false);
      }
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined" && clicked) {
      document.addEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
      return document.removeEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
    }
  });

  const getCategoriesData = async () => {
    const data = await getCategories(0);
    setData(data);
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  useEffect(() => {
    setCurrentCategory(
      data.filter((item: any) => item._id === postCreateStore.category)[0]
    );
  }, [postCreateStore.category, post, data]);

  return (
    <div
      ref={labelRef}
      onClick={() => setClicked(!clicked)}
      className={`${styles.profile} ${clicked ? styles.active : ""}`}
    >
      {currentCategory ? (
        <>
          <div className={styles.avatar}>
            <Image
              layout={"fill"}
              src={`${currentCategory?.imagePath}`}
              placeholder="blur"
              alt="ads"
            />
          </div>
          <p ref={popupRef} className={styles.name}>
            {currentCategory?.title}
          </p>
          <p ref={popupRef} className={styles.username}>
            {mobxStore.user.username || "Личный блог"}
          </p>
          <Arrow />
        </>
      ) : (
        <>
          <div className={styles.avatar}>
            <Image
              layout={"fill"}
              src={`${mobxStore.user.avatarPath}`}
              alt="ads"
            />
          </div>
          <p ref={popupRef} className={styles.name}>
            {mobxStore.user.username || "Личный блог"}
          </p>
          <Arrow />
        </>
      )}
      <AnimatePresence initial={false} mode="wait">
        {clicked && <AccountDrop data={data} />}
      </AnimatePresence>
    </div>
  );
};

export default observer(ChangeAccount);
