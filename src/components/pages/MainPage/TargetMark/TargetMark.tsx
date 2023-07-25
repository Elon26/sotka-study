import styles from "./styles.module.scss";

export default function TargetMark(): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            И уже с сентября начнешь подготовку к экзаменам <span className={styles.colored}>на нужный балл</span>
        </div>
    );
}
