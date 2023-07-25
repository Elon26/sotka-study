import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import Image from "next/image";
import progress from "public/images/main-page/progress.webp";
import progressMobile from "public/images/main-page/progress-mobile.webp";
import styles from "./styles.module.scss";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

export default function Progress(): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <div className={styles.wrapper}>
            <SecondPageHeader
                firstLine="Увидишь свой первый прогресс"
                secondLine="на пробниках уже в сентябре"
            />
            {windowWidth >= 768 && <Image
                className={styles.image}
                src={progress}
                alt="прогресс"
                width={1000}
                height={500}
                placeholder="blur"
            />}
            {windowWidth < 768 && <Image
                className={styles.image}
                src={progressMobile}
                alt="прогресс"
                width={670}
                height={630}
                placeholder="blur"
            />}
        </div>
    );
}
