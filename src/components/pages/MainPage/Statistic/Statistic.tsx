import styles from "./styles.module.scss";
import meta from "../../../../data/meta.json";
import StatisticItem from "./StatisticItem";
import Container from "@/components/common/Container/Container";

export default function Statistic(): React.ReactElement {
    return (
        <Container>
            <div className={styles.wrapper}>
                {meta.map(metaItem => (
                    <StatisticItem
                        key={metaItem.id}
                        title={metaItem.title}
                        description={metaItem.description}
                    />
                ))}
            </div>
        </Container>
    );
}
