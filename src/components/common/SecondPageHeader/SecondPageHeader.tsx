import styles from "./styles.module.scss";

interface SecondPageHeaderProps {
    firstLine: string
    secondLine?: string
}

export default function SecondPageHeader({ firstLine, secondLine }: SecondPageHeaderProps): React.ReactElement {
    return (
        <h2 className={styles.wrapper}>
            <p>{firstLine}</p>
            {secondLine && <p>{secondLine}</p>}
        </h2>
    );
}
