import styles from "./styles.module.scss";

interface FifthShapeProps {
    text: string
}

export default function FifthShape({ text }: FifthShapeProps): React.ReactElement {
    return (
        <div className={`${styles.shape} ${styles.circleShape} ${styles.fifthShape}`}>
            <span className={styles.shapeText}>{text}</span>
        </div>
    );
}
