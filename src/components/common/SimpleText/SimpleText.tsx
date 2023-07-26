import styles from "./styles.module.scss";

interface SimpleText {
    firstLine: string
    secondLine?: string
    textSize: "small" | "middle"
}

export default function SimpleText({ firstLine, secondLine, textSize }: SimpleText): React.ReactElement {
    return (
        <div
            className={`
            ${styles.wrapper}
            ${textSize === "small" && styles.smallText}
            ${textSize === "middle" && styles.middleText}
            `}
        >
            <p>{firstLine}</p>
            {secondLine && <p>{secondLine}</p>}
        </div>
    );
}
