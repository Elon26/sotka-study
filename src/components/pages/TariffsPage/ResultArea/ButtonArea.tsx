import styles from "./styles.module.scss";
import LinkButton from "@/components/common/LinkButton/LinkButton";


export default function ButtonArea(): React.ReactElement {
    return (
        <div className={styles.buttonArea}>
            <LinkButton
                text="Вводный урок"
                link="/#form"
                size="big"
                color="purple"
                border="none"
            />
        </div>
    );
}
