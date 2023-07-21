import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import styles from "./styles.module.scss";

export default function Progress(): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            <SecondPageHeader
                firstLine="Увидишь свой первый прогресс"
                secondLine="на пробниках уже в сентябре"
            />
            <span>Рисунок с прогрессом</span>
        </div>
    );
}
