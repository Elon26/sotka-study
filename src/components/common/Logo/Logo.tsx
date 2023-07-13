import Link from "next/link";
import styles from "./styles.module.scss";

interface LogoProps {
    isFull: boolean
}

export default function Logo({ isFull }: LogoProps): React.ReactElement {
    return (
        <Link href={"/"} className={styles.wrapper}>
            <div className={styles.firstcircle}></div>
            <div className={styles.secondcircle}></div>
            <div className={styles.thirdcircle}></div>
            <div className={styles.fourthcircle}>Сотка</div>
            <div className={styles.description}>
                <p>онлайн-школа</p>
                <p>егэ и огэ</p>
            </div>
        </Link>
    );
}
