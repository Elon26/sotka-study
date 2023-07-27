import pig from "public/images/main-page/pig.webp";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function FeedbackPig(): React.ReactElement {
    return (
        <div className={styles.pigContainer}>
            <Image
                className={styles.pigImage}
                src={pig}
                alt="лицо"
                width={3840}
                height={855}
                placeholder="blur"
            />
        </div>
    );
}
