import LinkButton from "@/components/common/LinkButton/LinkButton";
import styles from "./styles.module.scss";
import Image from "next/image";

interface CustomerButtonsProps {
    withSign: boolean
}

export default function CustomerButtons({ withSign }: CustomerButtonsProps): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            <LinkButton
                text="Вводный урок"
                link="/#form"
                size="middle"
                color="purple"
                border="none"
                withIcon={false}
            />
            <LinkButton
                text="Купить курс"
                link="store"
                size="middle"
                color="gray-dark"
                border="none"
                withIcon={false}
            />
            <Image src="/icons/curved-line.jpg" alt="" width={31} height={36} />
        </div>
    );
}
