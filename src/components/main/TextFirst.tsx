import styles from "../components.module.scss";
import { useEffect, useState } from "react";

export const TextFirst = () => {

    return (
        <div className={styles.textBlock}>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <h2>План дня</h2>
                    <div className={styles.timeLine}>
                        <div>
                            <p>13:30</p>
                            <p>сбор гостей у Храма всех Святых (<a href="https://maps.app.goo.gl/mJoxgzhn3c6G3pJr9" className={styles.link} target={"_blank"}>Katoļu iela 10A, Rīga, LV-1003</a>)</p>
                        </div>
                        <div>
                            <p>14:00</p>
                            <p>венчание! <br/> Мы будем рады принять Ваши поздравления чуть позже, в Храм возьмите ссобой только платки для покрытия головы (женщинам)</p>
                        </div>
                        <div>
                            <p>15:00</p>
                            <p>трансфер для всех гостей в Zirgzandales (<a href="https://maps.app.goo.gl/PZc1BHCxskhWLRku7" className={styles.link} target={"_blank"}>Mārupes novads, Vētras ciems, mājas Zandeļi, stallis Zirgzandales</a>)</p>
                        </div>
                        <div>
                            <p>16:00</p>
                            <p>свадебный welcome</p>
                        </div>
                        <div>
                            <p>17:00</p>
                            <p>банкет</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}