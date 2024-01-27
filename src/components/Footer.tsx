import styles from './components.module.scss';
import React from "react";
import { Logo } from "@/assets";

export const Footer = () => {
    return (
        <header className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Logo />
                </div>
            </div>
        </header>
    )
}