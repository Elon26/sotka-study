import styles from "./styles.module.scss";
import { githubHomePageUrl } from "../../../../data/contants.json";
import Image from "next/image";

export default function GiftPicture(): React.ReactElement {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <Image
                    className={styles.image}
                    src={githubHomePageUrl + "images/main-page/stats.webp"}
                    alt="график"
                    width={1920}
                    height={557}
                />
                <div className={styles.textarea}>
                    <div className={styles.text}>
                        <span>ещё </span>
                        <span className={styles.big}>3 месяца </span>
                        <br />
                        <span>обучения дадим </span>
                        <span className={styles.withLine}>бесплатно</span>
                    </div>
                    <div className={styles.effects}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
