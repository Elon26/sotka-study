import Image from "next/image";
import styles from "./styles.module.scss";
import pen from "public/images/teacher-page/about-pen.webp";
import penMobile from "public/images/teacher-page/about-pen-mob.webp";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

interface ThirdShapeProps {
    text: string
}

export default function ThirdShape({ text }: ThirdShapeProps): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <div className={`
            ${styles.shape} 
            ${windowWidth >= 900 ? styles.circleShape : styles.rectangleShape} 
            ${styles.thirdShape}
        `}>
            <span className={styles.shapeText}>{text}</span>
            <Image
                className={`${styles.image} ${styles.pen}`}
                src={windowWidth >= 900 ? pen : penMobile}
                alt="ручка"
                width={windowWidth >= 900 ? 191 : 300}
                height={windowWidth >= 900 ? 212 : 160}
                placeholder="blur"
            />
        </div>
    );
}
