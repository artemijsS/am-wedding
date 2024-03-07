import styles from "../components.module.scss";
import Image from "next/image";
import first from "@/assets/images/first.png";

export const FirstImage = () => {
    return (
        <div className={styles.firstImage}>
            <Image src={first} alt={"image"} />
        </div>
    )
}