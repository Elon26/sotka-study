import Image from "next/image";
import styles from "./styles.module.scss";
import probe from "public/images/tariffs-page/probe.webp";
import webinar from "public/images/tariffs-page/webinar.gif";
import { Interface } from "readline";

interface TestAndPsychologistProps {
    isPro: boolean
}

export default function TestAndPsychologist({ isPro }: TestAndPsychologistProps): React.ReactElement {
    return (
        <div className={styles.row}>
            <div className={styles.halfRowCol}>
                <div className={`${styles.infoItem} ${styles.halfRowItem} ${isPro && styles.proItem}`}>
                    <div className={`${styles.title} ${styles.fullRowTitle} ${isPro && styles.withProLabel}`}>{isPro ? "2 пробника" : "1 пробник"} в месяц</div>
                    <div className={`${styles.text} ${styles.shortArea}`}>Для проверки знаний и отслеживания прогресса</div>
                    <Image
                        className={`${styles.bottomImage}`}
                        src={probe}
                        alt="пробник"
                        width={575}
                        height={265}
                    />
                </div>
            </div>
            <div className={styles.halfRowCol}>
                <div className={`${styles.infoItem} ${styles.halfRowItem}`}>
                    <div className={`${styles.title} ${styles.fullRowTitle}`}>Вебинары с психологом</div>
                    <div className={`${styles.text}`}>Чтобы не нервничать на экзамене</div>
                    <Image
                        className={`${styles.bottomImage} ${styles.psychologist}`}
                        src={webinar}
                        alt="вебинар"
                        width={575}
                        height={265}
                    />
                </div>
            </div>
        </div>
    );
}
