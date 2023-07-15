import styles from "./styles.module.scss";
import meta from "../../../../data/meta.json";
import MetaItem from "./MetaItem";

export default function Statistic(): React.ReactElement {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                {meta.map(metaItem => (
                    <MetaItem
                        key={metaItem.id}
                        title={metaItem.title}
                        description={metaItem.description}
                    />
                ))}
            </div>
        </div>
    );
}
