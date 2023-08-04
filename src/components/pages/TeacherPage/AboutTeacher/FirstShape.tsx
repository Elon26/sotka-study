import Image from "next/image";
import styles from "./styles.module.scss";
import plane from "public/images/teacher-page/plane-min.webp";
import planeMobile from "public/images/teacher-page/plane-mob.webp";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

interface FirstShapeProps {
    text: string
}

export default function FirstShape({ text }: FirstShapeProps): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <div className={`${styles.shape} ${styles.rectangleShape} ${styles.firstShape}`}>
            <span className={styles.shapeText}>{text}</span>
            <Image
                className={`${styles.image} ${styles.plane}`}
                src={windowWidth >= 900 ? plane : planeMobile}
                alt="бумажный самолет"
                width={windowWidth >= 900 ? 513 : 550}
                height={windowWidth >= 900 ? 250 : 512}
                placeholder="blur"
            />
        </div>
    );
}
