import styles from "./Br.module.scss"

const Br = () => {
    return ( 
        <>
            <div className={styles.br}>
                <div className={styles.oval}></div>
                <div className={styles.oval}></div>
                <div className={styles.oval}></div>
            </div>
        </>
    );
}
 
export default Br;