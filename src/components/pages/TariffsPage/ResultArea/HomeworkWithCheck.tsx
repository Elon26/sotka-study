import Image from "next/image";
import styles from "./styles.module.scss";
import plane from "public/images/teacher-page/plane-min.webp";
import planeMobile from "public/images/teacher-page/plane-mob.webp";
import ReactPlayer from "react-player";
import { githubHomePageUrl } from "../../../../data/contants.json";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

export default function HomeworkWithCheck(): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <div className={styles.row}>
            <div className={styles.fullRowCol}>
                <div className={`${styles.infoItem} ${styles.fullRowItem} ${styles.purple}`}>
                    <div className={styles.infoCol}>
                        <div className={styles.title}>Домашние задания с проверкой и обратной связью</div>
                        <div className={`${styles.text} ${styles.shortArea}`}>Индивидуальная проверка и рекомендации от твоего наставника</div>
                        <Image
                            className={`${styles.background} ${styles.plane}`}
                            src={windowWidth >= 768 ? plane : planeMobile}
                            alt="бумажный самолет"
                            width={windowWidth >= 768 ? 513 : 550}
                            height={windowWidth >= 768 ? 250 : 512}
                            placeholder="blur"
                        />
                    </div>
                    <div className={styles.imageCol}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.media}>
                                <ReactPlayer
                                    url={githubHomePageUrl + "video/homeworkPreview.mp4"}
                                    playing={true}
                                    loop={true}
                                    muted={true}
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
