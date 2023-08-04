import Image from "next/image";
import styles from "./styles.module.scss";
import heart from "public/images/teacher-page/heart.webp";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

interface SecondShapeProps {
    text: string
}

export default function SecondShape({ text }: SecondShapeProps): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <div className={`
            ${styles.shape} 
            ${windowWidth >= 900 ? styles.rectangleShape : styles.circleShape}
            ${styles.secondShape}
        `}>
            <span className={styles.shapeText}>{text}</span>
            <div className={styles.images}>
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="98.14612868047982" viewBox="0 0 111 121" fill="none" className={styles.line}><path d="M16.5937 1.51663C101.025 34.5394 84.9668 110.769 40.9971 119.121C-9.67426 128.747 -35.1954 48.3314 110.4 78.5335" stroke="currentColor" strokeWidth="2"></path></svg>
                <div className={styles.tooltip}>
                    <Image
                        className={styles.heart}
                        src={heart}
                        alt="сердце"
                        width={150}
                        height={150}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    );
}
