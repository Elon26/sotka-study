import divideNumber from "@/utils/divideNumber";
import styles from "./styles.module.scss";

interface MetaItemProps {
    title: string | number
    description: string
}

export default function MetaItem({ title, description }: MetaItemProps): React.ReactElement {
    return (
        <div className={styles.item}>
            <div className={styles.title}>{typeof title === "number" ? divideNumber(title) : title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
}
