import styles from "./AccountDrop.module.scss"
import { useContext} from "react";
import { Context } from "../../../../../../pages/_app";
import Avatar from "../../../../../../public/img/svg/Avatar";
import { motion } from "framer-motion";

const AccountDrop = () => {

    const {postCreateStore} = useContext(Context);

    const changeProfile = (id: any) => {
        console.log(id);
    }

    
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

    return ( 
        <>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }} 
              className={styles.dropDownForm}>
                <p className={styles.title}>Мои сообщества</p>
                <div onClick={() => changeProfile('text')} className={styles.item}>
                    <Avatar />
                    <p className={styles.text}>MetaVxnn</p>
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
 
export default AccountDrop;