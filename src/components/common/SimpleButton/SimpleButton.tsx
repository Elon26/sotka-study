import styles from "./styles.module.scss";

interface SimpleButtonProps {
    text: string
    name: string
    color: "gray" | "black" | "red"
    type: "экзамен" | "дисциплина"
}

export default function SimpleButton({ text, name, color, type }: SimpleButtonProps): React.ReactElement {
    return (
        <button
            className={`
                ${styles.wrapper}
                ${color === "gray" && styles.gray}
                ${color === "black" && styles.black}
                ${color === "red" && styles.red}
                `}
            data-button-exam-name={type === "экзамен" ? name : ""}
            data-button-discipline-name={type === "дисциплина" ? name : ""}
        >
            <span>{text}</span>
        </button>
    );
}
