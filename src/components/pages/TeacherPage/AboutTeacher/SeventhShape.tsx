import styles from "./styles.module.scss";

interface SeventhShapeProps {
    text: string
}

export default function SeventhShape({ text }: SeventhShapeProps): React.ReactElement {
    return (
        <div className={`${styles.shape} ${styles.circleShape} ${styles.seventhShape}`}>
            <span className={styles.shapeText}>{text}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="111" height="121.04689203925845" viewBox="0 0 111 121" fill="none" className={styles.line}><path d="M16.5937 1.51663C101.025 34.5394 84.9668 110.769 40.9971 119.121C-9.67426 128.747 -35.1954 48.3314 110.4 78.5335" stroke="currentColor" strokeWidth="2"></path></svg>
        </div>
    );
}
