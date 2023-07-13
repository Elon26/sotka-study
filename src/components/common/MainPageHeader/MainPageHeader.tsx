import styles from "./styles.module.scss";

interface MainPageHeaderProps {
    firstLine: string
    secondLine?: string
}

export default function MainPageHeader({ firstLine, secondLine }: MainPageHeaderProps): React.ReactElement {
    return (
        <h1 className={styles.wrapper}>
            <p>{firstLine}</p>
            {secondLine && <p>{secondLine}</p>}
        </h1>
    );
}
