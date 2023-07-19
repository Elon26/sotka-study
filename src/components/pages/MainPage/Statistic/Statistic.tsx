import styles from "./styles.module.scss";
import meta from "../../../../data/meta.json";
import StatisticItem from "./StatisticItem";

export default function Statistic(): React.ReactElement {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                {meta.map(metaItem => (
                    <StatisticItem
                        key={metaItem.id}
                        title={metaItem.title}
                        description={metaItem.description}
                    />
                ))}
            </div>
        </div>
    );
}
