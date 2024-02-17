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
                        <h2>"Zirgzandales"</h2>
                        <p>Mārupes novads, Vētras ciems, mājas Zandeļi, stallis Zirgzandales</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1090.177827068932!2d23.9941336!3d56.8741447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eed0b30845927f%3A0x2371ee80f75d3291!2sZirgzandales!5e0!3m2!1slv!2suk!4v1708190668144!5m2!1slv!2suk" width="100%" height="300px" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}