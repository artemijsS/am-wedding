'use client';

import styles from "../components.module.scss";
import { useEffect, useState } from "react";

export const Timer = ({ defDif }: { defDif: number | null }) => {

    const [days, setDays] = useState(defDif ? Math.floor(defDif / (1000 * 60 * 60 * 24)) : "");
    const [hours, setHours] = useState(defDif ? Math.floor((defDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : "");
    const [minutes, setMinutes] = useState(defDif ? Math.floor((defDif % (1000 * 60 * 60)) / (1000 * 60)) : "");
    const [seconds, setSeconds] = useState(defDif ? Math.floor((defDif % (1000 * 60)) / 1000) : "");
    const [end, setEnd] = useState(!defDif);

    const calculateTimeLeft = () => {
        const targetDate = new Date("2024-08-09T17:00:00");
        const currentDate = new Date();
        const timeDifference = targetDate.getTime() - currentDate.getTime();

        if (timeDifference > 0) {
            const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setDays(daysLeft.toString());
            setHours(hoursLeft.toString());
            setMinutes(minutesLeft.toString());
            setSeconds(secondsLeft.toString());
        } else {
            setEnd(true);
        }
    };

    useEffect(() => {
        const timerInterval = setInterval(() => {
            calculateTimeLeft();
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    if (end) return null;

    return (
        <div className={styles.timer}>
            <div className={styles.boxTimer}>
                <div>{days} <span>дней</span></div>
                <div>{hours} <span>часов</span></div>
                <div>{minutes} <span>минут</span></div>
                <div>{seconds} <span>секунд</span></div>
            </div>
            <div className={styles.inviteText}>
                Приглашаем Вас разделить с нами самый незабываемый день в нашей жизни— нашу свадьбу
            </div>
            <div className={styles.date}>
                <h2>
                    <span>
                        09
                        <svg width="44" height="7" viewBox="0 0 44 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.649471 0.467898C-3.40125 2.82587 12.3076 5.46681 25.2502 4.71225C31.1781 4.24066 34.7348 4.52362 37.6988 5.46681C41.6507 6.88159 41.8483 6.78727 42.7375 4.80657C43.7254 2.73155 43.6266 2.63724 34.2408 2.07132C28.9057 1.69405 23.867 1.69405 22.9778 1.977C21.5947 2.54292 10.2329 1.41109 3.90981 0.0906219C2.82303 -0.0980158 1.34106 -0.00369692 0.649471 0.467898Z" fill="#6292AF"/>
                        </svg>
                    </span> августа 2024
                </h2>
            </div>
        </div>
    )
}