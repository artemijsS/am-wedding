import styles from './components.module.scss';
import React from "react";
import { Logo } from "@/assets";
import Image from "next/image";
import main from "@/assets/images/main.jpg";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <div className={styles.img}>
                        <Image src={main} alt={"img"} />
                        {/*<div className={styles.logo}>*/}
                        {/*    <Logo />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </header>
    )
}