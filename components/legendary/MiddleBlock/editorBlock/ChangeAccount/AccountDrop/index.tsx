import styles from "./AccountDrop.module.scss"
import { useContext} from "react";
import Avatar from "../../../../../../public/img/svg/Avatar";
import Image from "next/image"
import { motion } from "framer-motion";
import { Context } from "../../../../../../app/(pages)/layout";
import { observer } from "mobx-react-lite";

const AccountDrop = () => {

    const {postCreateStore, mobxStore} = useContext(Context);

    const changeProfile = (id: any) => {
        console.log(id);
    }

    return ( 
        <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.dropDownForm}>
                <p className={styles.title}>Мои сообщества</p>
                <div onClick={() => changeProfile('text')} className={styles.item}>
                    <div className={styles.avatar}>
                      <Image layout={"fill"} src={mobxStore.user.avatarPath} alt={""}/>
                    </div>
                    <p className={styles.text}>{mobxStore.user.username}</p>
                </div>
                <p className={styles.title}>Сообщества</p>
                <div onClick={() => changeProfile('h1')} className={styles.item}>
                    <Avatar />
                    <p className={styles.text}>Genshin Impact</p>
                </div>
                <div onClick={() => changeProfile('h1')} className={styles.item}>
                    <Avatar />
                    <p className={styles.text}>Технологии</p>
                </div>
                <div onClick={() => changeProfile('h1')} className={styles.item}>
                    <Avatar />
                    <p className={styles.text}>Dota 2</p>
                </div>
            </motion.div>
        </>
    );
}
 
export default observer(AccountDrop);