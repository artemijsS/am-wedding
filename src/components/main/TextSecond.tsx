import styles from "../components.module.scss";
import { useEffect, useState } from "react";

export const TextSecond = () => {

    return (
        <div className={styles.textBlock}>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    Если вы заблудились, готовите сюрприз или у вас появились какие-либо вопросы, вам с радостью поможет организатор нашей свадьбы: Мария Павлова <a className={styles.link} href="tel:+37124930981">+371 24930981</a>
                </div>
            </div>
        </div>
    )
}