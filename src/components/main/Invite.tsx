import styles from "../components.module.scss";

export const Invite = () => {
    return (
        <div className={styles.invite}>
            <div className={styles.box}>
                <h2>Дорогие Друзья</h2>
                <p>
                    В нашей жизни совсем скоро состоится очень важное событие - наша свадьба!
                    В этот день мы хотим оказаться в окружении близких нам людей, поэтому приглашаем вас разделить с нами это событие!
                </p>
            </div>
        </div>
    )
}