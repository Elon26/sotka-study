import LinkButton from "@/components/common/LinkButton/LinkButton";
import styles from "./styles.module.scss";
import StudentsSign from "./StudentsSign";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

interface CustomerButtonsProps {
    withSign: boolean
    target: "students" | "parents"
}

export default function CustomerButtons({ withSign, target }: CustomerButtonsProps): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <LinkButton
                    text="Вводный урок"
                    link="/#form"
                    size={windowWidth >= 768 ? "middle" : "big"}
                    color="purple"
                    border="none"
                />
                <LinkButton
                    text="Купить курс"
                    link="store"
                    size={windowWidth >= 768 ? "middle" : "big"}
                    color="gray-dark"
                    border="none"
                />
                {target === "students" && withSign && <StudentsSign />}
            </div>
        </div>
    );
}
