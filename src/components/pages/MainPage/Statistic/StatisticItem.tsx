import divideNumber from "@/utils/divideNumber";
import styles from "./styles.module.scss";

interface StatisticItemItemProps {
    title: string | number
    description: string
}

export default function StatisticItem({ title, description }: StatisticItemItemProps): React.ReactElement {
    return (
        <div className={styles.item}>
            <div className={styles.title}>{typeof title === "number" ? divideNumber(title) : title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
}
