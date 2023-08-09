import Image from "next/image";
import styles from "./styles.module.scss";
import pro from "public/images/tariffs-page/pro.webp";
import proBig from "public/images/tariffs-page/pro-big.webp";

export default function DifficultHomework(): React.ReactElement {
    return (
        <div className={styles.row}>
            <div className={styles.fullRowCol}>
                <div className={`${styles.infoItem} ${styles.fullRowItem} ${styles.proItem}`}>
                    <div className={styles.infoCol}>
                        <div className={`${styles.title} ${styles.withProLabel}`}>Сложные домашние задания</div>
                        <div className={`${styles.text}`}>У тебя будут усложненные домашки, для подготовки на максимальный балл</div>
                        <Image
                            className={`${styles.background} ${styles.pro}`}
                            src={pro}
                            alt="домашняя работа"
                            width={2420}
                            height={1800}
                        />
                    </div>
                    <div className={styles.imageCol}>
                        <div className={styles.imageWrapper}>
                            <Image
                                className={styles.media}
                                src={proBig}
                                alt="примеры заданий"
                                width={660}
                                height={455}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
