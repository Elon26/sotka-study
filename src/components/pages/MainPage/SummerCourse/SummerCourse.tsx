import Image from "next/image";
import styles from "./styles.module.scss";
import file from "public/images/main-page/file-badge.webp";
import it from "public/images/main-page/it-badge.webp";
import university from "public/images/main-page/university-badge.webp";

export default function SummerCourse(): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.top}>
                    <div className={styles.title}>Поймешь, кем хочешь стать</div>
                    <div className={styles.text}>и выберешь предметы для сдачи</div>
                </div>
                <div className={styles.bottom}>
                    <Image
                        className={styles.image}
                        src={it}
                        alt="иконка"
                        width={200}
                        height={200}
                        placeholder="blur"
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.top}>
                    <div className={styles.title}>Определишься с вузом</div>
                    <div className={styles.text}>и поставишь цель по баллам</div>
                </div>
                <div className={styles.bottom}>
                    <Image
                        className={styles.image}
                        src={university}
                        alt="иконка"
                        width={200}
                        height={200}
                        placeholder="blur"
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.top}>
                    <div className={styles.title}>Базовые темы ЕГЭ и ОГЭ</div>
                    <div className={styles.text}>будешь знать их уже к концу лета</div>
                </div>
                <div className={styles.bottom}>
                    <Image
                        className={styles.image}
                        src={file}
                        alt="иконка"
                        width={200}
                        height={200}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    );
}
