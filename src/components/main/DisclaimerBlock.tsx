import styles from "../components.module.scss";

export const DisclaimerBlock = () => {
    return (
        <div className={`${styles.mainBlock} ${styles.disclaimer}`}>
            <div className={styles.box}>
                <div className={styles.secondWrapper}>
                    <div className={styles.info}>
                        Если вы заблудились, готовите сюрприз или у вас появились какие-либо вопросы, вам с радостью поможет организатор нашей свадьбы:
                    </div>
                    <div className={styles.contactInfo}>
                        Мария Павлова <a href="tel:+37124930981">+371 24930981</a>
                    </div>
                </div>
            </div>
        </div>
    )
}