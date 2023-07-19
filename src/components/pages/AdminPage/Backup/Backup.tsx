import useMockData from "@/hooks/useMockData";
import styles from "./styles.module.scss";

export default function Backup(): React.ReactElement {
    const { initialize, progress, status } = useMockData();

    return (
        <div className={styles.wrapper}>
            <h3>Загрузка архивной копии базы данных</h3>
            <ul>
                <li>Статус: {status}</li>
                <li>Завершено на {progress}%</li>
            </ul>
            <button onClick={() => initialize()}>
                Загрузить
            </button>
        </div>
    );
}
