import styles from "./styles.module.scss";

interface SecondPageHeaderProps {
    firstLine: string
    secondLine?: string
    firstLineColor?: "blue"
    secondLineColor?: "blue"
}

export default function SecondPageHeader({ firstLine, secondLine, firstLineColor, secondLineColor }: SecondPageHeaderProps): React.ReactElement {
    return (
        <h2 className={styles.wrapper}>
            <p className={`${firstLineColor === "blue" && styles.blue}`}>{firstLine}</p>
            {secondLine && <p className={`${secondLineColor === "blue" && styles.blue}`}>{secondLine}</p>}
        </h2>
    );
}
