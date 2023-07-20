import styles from "./styles.module.scss";

interface EducationHeadersProps {
    selectedHeader: number
}

export default function EducationHeaders({ selectedHeader }: EducationHeadersProps): React.ReactElement {
    return (
        <div className={styles.headers}>
            <div
                className={`${styles.header} ${selectedHeader >= 1 && styles.selectedHeader}`}
                data-info-number={1}
            >
                <div className={styles.row}>
                    <div className={styles.number}>01</div>
                    <div className={styles.title}>наша платформа</div>
                </div>
                <div className={styles.line}></div>
            </div>
            <div
                className={`${styles.header} ${selectedHeader >= 2 && styles.selectedHeader}`}
                data-info-number={2}
            >
                <div className={styles.row}>
                    <div className={styles.number}>02</div>
                    <div className={styles.title}>доступ с любого устройства</div>
                </div>
                <div className={styles.line}></div>
            </div>
            <div
                className={`${styles.header} ${selectedHeader >= 3 && styles.selectedHeader}`}
                data-info-number={3}
            >
                <div className={styles.row}>
                    <div className={styles.number}>03</div>
                    <div className={styles.title}>практика и обратная связь</div>
                </div>
                <div className={styles.line}></div>
            </div>
            <div
                className={`${styles.header} ${selectedHeader >= 4 && styles.selectedHeader}`}
                data-info-number={4}
            >
                <div className={styles.row}>
                    <div className={styles.number}>04</div>
                    <div className={styles.title}>кайфовые материалы</div>
                </div>
                <div className={styles.line}></div>
            </div>
        </div >
    );
}
