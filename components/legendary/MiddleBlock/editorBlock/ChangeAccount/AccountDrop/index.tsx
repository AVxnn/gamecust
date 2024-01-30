import styles from "./AccountDrop.module.scss";
import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Context } from "../../../../../../app/(pages)/layout";
import { observer } from "mobx-react-lite";

const AccountDrop = ({ data }: any) => {
  const { postCreateStore, mobxStore } = useContext(Context);

  const changeProfile = (id: any) => {
    console.log(id);
    postCreateStore.changeCategory(id);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.dropDownForm}
      >
        <p className={styles.title}>Мои сообщества</p>
        <div onClick={() => changeProfile("")} className={styles.item}>
          <div className={styles.avatar}>
            <Image layout={"fill"} src={mobxStore.user.avatarPath} alt={""} />
          </div>
          <p className={styles.text}>{mobxStore.user.username}</p>
        </div>
        <p className={styles.title}>Сообщества</p>
        <div className={styles.list}>
          {data.map((item: any) => {
            return (
              <div
                key={item._id}
                onClick={() => changeProfile(item._id)}
                className={styles.item}
              >
                <Image
                  className={styles.image}
                  src={item.imagePath}
                  width={32}
                  height={32}
                  alt={"avatar"}
                />
                <p className={styles.text}>{item.title}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default observer(AccountDrop);
