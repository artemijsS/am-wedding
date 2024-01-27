import styles from "../components.module.scss";
import { useEffect, useState } from "react";

export const TextFirst = () => {

    return (
        <div className={styles.textBlock}>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <h2>Организационные моменты</h2>
                    <p>Будем рады, если вместо цветов вы принесете корм для собак и кошек. Вся собранная продукция будет пожертвована в приют <span>“Ulubele”</span>.</p>
                </div>
            </div>
        </div>
    )
}