import React from "react";
import styles from "../components.module.scss";
import Image from "next/image";
import second from "@/assets/images/second.jpg";

export const InfoSecond = () => {
    return (
        <div className={styles.info + " " + styles.reverse}>
            <div className={styles.box}>
                <div className={styles.blocks}>
                    <div className={styles.img}>
                        <Image src={second} alt={"img"} />
                    </div>
                    <div className={styles.infoBlock}>
                        <h2>Пожалуйста, сообщите нам о своем присутствии до</h2>
                        <h2>17.07.24</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}