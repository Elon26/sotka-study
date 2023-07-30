import styles from "./styles.module.scss";

interface WhiteSpaceProps {
    size: "small" | "middle" | "big"
    id?: string
}

export default function WhiteSpace({ size, id }: WhiteSpaceProps): React.ReactElement {
    return (
        <div
            className={`
                ${size === "small" && styles.small}
                ${size === "middle" && styles.middle}
                ${size === "big" && styles.big}
            `}
            id={id}
        ></div>
    );
}
