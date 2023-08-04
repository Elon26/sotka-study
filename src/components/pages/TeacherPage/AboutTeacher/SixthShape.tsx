import Image from "next/image";
import styles from "./styles.module.scss";
import cursor from "public/images/teacher-page/cursor-about.webp";

interface SixthShapeProps {
    text: string
}

export default function SixthShape({ text }: SixthShapeProps): React.ReactElement {
    return (
        <div className={`${styles.shape} ${styles.rectangleShape} ${styles.sixthShape}`}>
            <span className={styles.shapeText}>{text}</span>
            <Image
                className={`${styles.image} ${styles.cursor}`}
                src={cursor}
                alt="курсор"
                width={400}
                height={250}
                placeholder="blur"
            />
        </div>
    );
}
