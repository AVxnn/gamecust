import styles from "./AccountDrop.module.scss"
import { useContext} from "react";
import { Context } from "../../../../../../pages/_app";
import Avatar from "../../../../../../public/img/svg/Avatar";

const AccountDrop = () => {

    const {postCreateStore} = useContext(Context);

    const changeProfile = (id: any) => {
        console.log(id);
    }

    return ( 
        <>
            <div className={styles.dropDownForm}>
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
            </div>
        </>
    );
}
 
export default AccountDrop;