import Image from "next/image";
import styles from "./styles.module.scss";
import heart from "public/images/tariffs-page/heart.webp";
import career from "public/images/tariffs-page/career.gif";

export default function CareerGuidance(): React.ReactElement {
    return (
        <div className={styles.row}>
            <div className={styles.fullRowCol}>
                <div className={`${styles.infoItem} ${styles.fullRowItem} ${styles.blue}`}>
                    <div className={styles.infoCol}>
                        <div className={styles.title}>Профориентация и выбор вуза</div>
                        <div className={`${styles.text}`}>Ты сможешь в удобном формате выбрать себе профессию и вуз, в котором её можно освоить</div>
                        <Image
                            className={`${styles.background} ${styles.heart}`}
                            src={heart}
                            alt="сердце"
                            width={440}
                            height={212}
                        />
                    </div>
                    <div className={styles.imageCol}>
                        <div className={styles.imageWrapper}>
                            <Image
                                className={styles.media}
                                src={career}
                                alt="профоритентация"
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
