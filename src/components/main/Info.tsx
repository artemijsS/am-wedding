import React from "react";
import styles from "../components.module.scss";
import Image from "next/image";
import second from "@/assets/images/second.jpg";

export const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.box}>
                <div className={styles.blocks}>
                    <div className={styles.img}>
                        <Image src={second} alt={"img"} />
                    </div>
                    <div className={styles.infoBlock}>
                        <h2>20.07.24</h2>
                        <h2>Grand Palace Hotel</h2>
                        <p>Pils iela 12, Centra rajons, Rīga, LV-1050</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.908492785757!2d24.1049192039786!3d56.950369038169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd9fa301997%3A0x386dc60eb39e2c7a!2sGrand%20Palace%20Hotel!5e0!3m2!1slv!2slv!4v1706360935955!5m2!1slv!2slv" width="100%" height="300px" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}