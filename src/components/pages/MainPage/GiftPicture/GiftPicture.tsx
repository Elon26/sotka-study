import styles from "./styles.module.scss";
import { githubHomePageUrl } from "../../../../data/contants.json";

export default function GiftPicture(): React.ReactElement {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <img className={styles.img} src={githubHomePageUrl + "images/main-page/stats.webp"} alt="график" />
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
