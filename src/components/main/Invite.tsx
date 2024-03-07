import styles from "../components.module.scss";
import { Logo } from "@/assets";

export const Invite = () => {
    return (
        <div className={styles.invite}>
            <div className={styles.box}>
                <Logo />
            </div>
        </div>
    )
}