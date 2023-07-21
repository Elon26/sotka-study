import styles from "./styles.module.scss";
import Image from "next/image";
import statsImgBig from "public/images/main-page/stats.webp";
import statsImgSmall from "public/images/main-page/stats-mobile.webp";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import Container from "@/components/common/Container/Container";

export default function GiftPicture(): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <Container>
            <>
                <div className={styles.wrapper}>
                    {windowWidth >= 768 && <Image
                        className={styles.image}
                        src={statsImgBig}
                        alt="график"
                        width={1240}
                        height={360}
                        placeholder="blur"
                    />}
                    {windowWidth < 768 && <Image
                        className={styles.image}
                        src={statsImgSmall}
                        alt="график"
                        width={768}
                        height={300}
                        placeholder="blur"
                    />}
                    <div className={styles.textarea}>
                        <div className={styles.text}>
                            <span>ещё </span>
                            <span className={styles.big}>3 месяца </span>
                            <br />
                            <span>обучения дадим </span>
                            <span className={styles.withLine}>бесплатно</span>
                        </div>
                        <div className={styles.effects}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </>
        </Container>
    );
}
