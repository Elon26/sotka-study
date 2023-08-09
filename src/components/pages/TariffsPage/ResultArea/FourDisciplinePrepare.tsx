import Image from "next/image";
import styles from "./styles.module.scss";
import book from "public/images/tariffs-page/book.webp";
import preparation from "public/images/tariffs-page/preparation.gif";

export default function FourDisciplinePrepare(): React.ReactElement {
    return (
        <div className={styles.row}>
            <div className={styles.fullRowCol}>
                <div className={`${styles.infoItem} ${styles.fullRowItem} ${styles.blue}`}>
                    <div className={styles.infoCol}>
                        <div className={styles.title}>Подготовка сразу по 4 предметам</div>
                        <div className={`${styles.text} ${styles.shortArea}`}>Без доплат за второй, третий, четвертый предметы</div>
                        <Image
                            className={`${styles.background} ${styles.book}`}
                            src={book}
                            alt="книга"
                            width={2420}
                            height={1800}
                        />
                    </div>
                    <div className={styles.imageCol}>
                        <div className={styles.imageWrapper}>
                            <Image
                                className={styles.media}
                                src={preparation}
                                alt="подготовка"
                                width={550}
                                height={380}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
