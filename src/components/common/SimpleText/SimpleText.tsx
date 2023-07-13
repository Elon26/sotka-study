import styles from "./styles.module.scss";

interface SimpleText {
    text: string
}

export default function SimpleText({ text }: SimpleText): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            {text}
        </div>
    );
}
