import styles from "./styles.module.scss";

export default function GiftPicture(): React.ReactElement {
    return (
        <div className="container">
            {/* <div className={styles.wrapper}>
                <img className={styles.img} src="images/main-page/stats.webp" alt="график" />
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
            </div> */}

            1
            <div className={styles.DELETEME} >
                <img src="next.svg" />
            </div>
            2
            <div className={styles.DELETEME} >
                <img src="./next.svg" />
            </div>
            3
            <div className={styles.DELETEME} >
                <img src="../next.svg" />
            </div>
            4
            <div className={styles.DELETEME} >
                <img src="public/next.svg" />
            </div>
            5
            <div className={styles.DELETEME} >
                <img src="./public/next.svg" />
            </div>
            6
            <div className={styles.DELETEME} >
                <img src="../public/next.svg" />
            </div>
        </div>
    );
}
