import styles from "../components.module.scss";
import secondImage from "@/assets/images/second.png";
import Image from "next/image";


export const MainBlock = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.box}>
                <div className={styles.secondWrapper}>
                    <div className={styles.text}>
                        <h2>Друзья и Родные!</h2>
                        <p>
                            В нашей жизни совсем скоро состоится очень важное событие - наша свадьба! В этот день мы хотим оказаться в окружении близких нам людей, поэтому приглашаем вас разделить с нами это событие!
                        </p>
                    </div>
                    <div className={styles.secondImage}>
                        <Image src={secondImage} alt={"image"} />
                    </div>
                    <div className={styles.text}>
                        <h2>Дресс код</h2>
                        <p>
                            Будем благодарны, если при выборе нарядов на наше торжество вы придержитесь следующей палитры
                        </p>
                    </div>
                    <div className={styles.colors}>
                        <h3>Для женщин:</h3>
                        <div className={styles.balls}>
                            <div className={styles.ball} />
                            <div className={styles.ball} style={{ backgroundColor: "#8B4513" }} />
                            <div className={styles.ball} style={{ backgroundColor: "#556B2F" }} />
                            <div className={styles.ball} style={{ backgroundColor: "#191970" }} />
                            <div className={styles.ball} style={{ backgroundColor: "#6495ED" }} />
                            <div className={styles.ball} style={{ backgroundColor: "#BDB76B" }} />
                        </div>
                    </div>
                    <div className={styles.colors}>
                        <h3>Для мужчин:</h3>
                        <div className={styles.balls}>
                            <div className={styles.ball} style={{ backgroundColor: "#8B4513" }} />
                            <div className={styles.ball} style={{ backgroundColor: "#556B2F" }} />
                            <div className={styles.ball} style={{ backgroundColor: "#191970" }} />
                            <div className={styles.ball} style={{ backgroundColor: "#000" }} />
                        </div>
                    </div>
                    <div className={styles.info}>
                        Вместо цветов мы будем рады, если вы подарите нам книгу или настольную игру, которая станет частью нашей уютной семейной жизни.
                    </div>
                </div>
            </div>
        </div>
    )
}