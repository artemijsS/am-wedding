import styles from "../components.module.scss";

export const Schedule = () => {
    return (
        <div className={styles.schedule}>
            <div className={styles.box}>
                <h2>Распорядок дня</h2>
                <div className={styles.sc}>
                    <div className={styles.line}>
                        <div className={styles.time}>13:30</div>
                        <div className={styles.info}>
                            <div className={styles.b}>Сбор гостей у Храма Всех Святых</div>
                            <div>Katoļu iela 10A, LV-1003</div>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.time}>14:00</div>
                        <div className={styles.info}>
                            <div className={styles.b}>Венчание</div>
                            <div>Мы будем рады принять Ваши поздравления чуть позже, в Храм возьмите с собой только платки для покрытия головы (женщинам)</div>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.time}>16:00</div>
                        <div className={styles.info}>
                            <div className={styles.b}>Трансфер для всех гостей</div>
                            <div>Zirgzandales (Mārupes novads, Vētras ciems, stallis Zirgzandales)</div>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.time}>17:00</div>
                        <div className={styles.info}>
                            <div className={styles.b}>Банкет</div>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.time}>02:30</div>
                        <div className={styles.info}>
                            <div className={styles.b}>Трансфер обратно в Ригу</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}