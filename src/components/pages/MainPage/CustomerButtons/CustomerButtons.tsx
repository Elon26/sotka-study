import LinkButton from "@/components/common/LinkButton/LinkButton";
import styles from "./styles.module.scss";
import StudentsSign from "./StudentsSign";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

interface CustomerButtonsProps {
    withSign: boolean
    target: "students" | "parents"
    firstButtonColor: "purple" | "blue"
    secondButtonColor: "gray-dark" | "purple"

}

export default function CustomerButtons({ withSign, target, firstButtonColor, secondButtonColor }: CustomerButtonsProps): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <LinkButton
                    text="Вводный урок"
                    link="/#form"
                    size={windowWidth >= 768 ? "middle" : "big"}
                    color={firstButtonColor}
                    border="none"
                />
                <LinkButton
                    text="Купить курс"
                    link="/tariffs"
                    size={windowWidth >= 768 ? "middle" : "big"}
                    color={secondButtonColor}
                    border="none"
                />
                {target === "students" && withSign && <StudentsSign />}
            </div>
        </div>
    );
}
