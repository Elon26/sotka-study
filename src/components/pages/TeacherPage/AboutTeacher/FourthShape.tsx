import styles from "./styles.module.scss";
import { vkIcon, youtubeIcon, telegramIcon } from "../../../../data/icons";
import Link from "next/link";
import Image from "next/image";
import puzzle from "public/images/teacher-page/puzzle.webp";
import media from "public/images/teacher-page/media.webp";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

interface FourthShapeProps {
    text: string
    vkLink: string
    youtubeLink: string
    telegramLink: string
}

export default function FourthShape({ text, vkLink, youtubeLink, telegramLink }: FourthShapeProps): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <div className={`${styles.shape} ${styles.rectangleShape} ${styles.fourthShape}`}>
            <span className={styles.shapeText}>{text}</span>
            {windowWidth >= 900 && <svg xmlns="http://www.w3.org/2000/svg" width="177" height="53.985" viewBox="0 0 177 54" fill="none"><path d="M156.807 53.0161C195.245 5.39331 170.229 -1.92149 114.465 19.4998C32.4653 51 -19.0344 39.9998 9.4656 0.999786M156.807 53.0161C162.001 46.1137 160.766 40.4697 160.132 38.3813M156.807 53.0161C162.648 46.8183 166.588 45.4855 170.229 45.2669" stroke="currentColor" strokeWidth="1.5"></path></svg>}
            <div className={styles.socialLinks}>
                <Link
                    href={vkLink}
                    target="_blank"
                    className={styles.socialLinkItem}
                >
                    <span className={`${styles.socialLink} ${styles.vkLink}`}>
                        {vkIcon}
                    </span>
                    {windowWidth < 900 && <span className={styles.shapeText}>В контакте</span>}
                </Link>
                <Link
                    href={youtubeLink}
                    className={styles.socialLinkItem}
                    target="_blank"
                >
                    <span className={`${styles.socialLink} ${styles.youtubeLink}`}>
                        {youtubeIcon}
                    </span>
                    {windowWidth < 900 && <span className={styles.shapeText}>Ютуб</span>}
                </Link>
                <Link
                    href={telegramLink}
                    className={styles.socialLinkItem}
                    target="_blank"
                >
                    <span className={`${styles.socialLink} ${styles.telegramLink}`}>
                        {telegramIcon}
                    </span>
                    {windowWidth < 900 && <span className={styles.shapeText}>Телеграм</span>}
                </Link>
                <Image
                    className={`${styles.image} ${styles.media}`}
                    src={media}
                    alt="медиа"
                    width={290}
                    height={290}
                    placeholder="blur"
                />
            </div>
            <Image
                className={`${styles.image} ${styles.puzzle}`}
                src={puzzle}
                alt="пазл"
                width={120}
                height={120}
                placeholder="blur"
            />
        </div>
    );
}
