import Container from "../Container/Container";
import styles from "./styles.module.scss";

interface PageAreaProps {
    color: "white" | "blackLight"
    innerPadding: boolean
    children: React.ReactElement
}

export default function PageArea({ color, innerPadding, children }: PageAreaProps): React.ReactElement {
    return (
        <div className={`
            ${styles.wrapper}
            ${innerPadding && styles.innerPadding}
            ${color === "white" && styles.white}
            ${color === "blackLight" && styles.blackLight}
        `}>
            {children}
        </div>
    );
}
