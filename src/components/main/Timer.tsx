'use client';

import styles from "../components.module.scss";
import { useEffect, useState } from "react";

export const Timer = () => {

    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const [end, setEnd] = useState(false);

    const calculateTimeLeft = () => {
        const targetDate = new Date("2024-07-23T00:00:00");
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
            <div className={styles.box}>
                <div>{days} <span>дней</span></div>
                <div>{hours} <span>часов</span></div>
                <div>{minutes} <span>минут</span></div>
                <div>{seconds} <span>секунд</span></div>
            </div>
        </div>
    )
}