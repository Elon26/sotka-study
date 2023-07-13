import styles from "./styles.module.scss";

interface WhiteSpaceProps {
    size: "small" | "middle" | "big"
}

export default function WhiteSpace({ size }: WhiteSpaceProps): React.ReactElement {
    return (
        <div className={`
        ${size === "small" && styles.small}
        ${size === "middle" && styles.middle}
        ${size === "big" && styles.big}
        `}></div>
    );
}
