import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface FeedbackTextGridItemProps {
    name: string
    number: number
    photo: string
    feedbackFull: string
    feedbackShort: string
    selectedFeedback: number
}

export default function FeedbackTextGridItem({ name, number, photo, feedbackFull, feedbackShort, selectedFeedback }: FeedbackTextGridItemProps): React.ReactElement {
    const gridItemNumber = number === 1 ? number : ++number;
    const gridItemClassName = "gridItem" + gridItemNumber;

    return (
        <div
            className={`
                ${styles.gridItem} 
                ${styles[gridItemClassName]} 
                ${selectedFeedback === gridItemNumber && styles.gridItemBig}
            `}
        >
            <div className={`${styles.gridItemBody}`}>
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
                {selectedFeedback !== gridItemNumber && (<>
                    <div className={styles.feedback}>{feedbackShort}</div>
                    {feedbackFull !== feedbackShort && (
                        <div
                            className={styles.toggleSizeButton}
                            data-mainpage-feedback-item={gridItemNumber}
                        >читать полностью</div>
                    )}
                </>)}
                {selectedFeedback === gridItemNumber && (<>
                    <div className={styles.feedback}>{feedbackFull}</div>
                    <div
                        className={styles.toggleSizeButton}
                        data-mainpage-feedback-item={0}
                    >свернуть</div>
                </>)}
            </div>
        </div>
    );
}