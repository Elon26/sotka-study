import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface FeedbackTextGridItemProps {
    name: string
    number: number
    photo: string
    feedbackFull: string
    feedbackShort: string
}

export default function FeedbackTextGridItem({ name, number, photo, feedbackFull, feedbackShort }: FeedbackTextGridItemProps): React.ReactElement {
    const gridItemNumber = number === 1 ? number : ++number;
    const gridItemClassName = "gridItem" + gridItemNumber;
    const [isShortFeedback, setIsShortFeedback] = useState(true);

    return (
        <div className={`${styles.gridItem} ${styles[gridItemClassName]}`}>
            <div className={styles.gridItemBody}>
                <div className={styles.nameRow}>
                    <div className={styles.photo}>
                        <Image
                            src={photo}
                            alt="студент"
                            width={44}
                            height={44}
                        />
                    </div>
                    <div className={styles.name}>{name}</div>
                </div>
                {isShortFeedback && (<>
                    <div className={styles.feedbackShort}>{feedbackShort}</div>
                    {feedbackFull !== feedbackShort && <div className={styles.showAll}>читать полностью</div>}
                </>)}
            </div>
        </div>
    );
}