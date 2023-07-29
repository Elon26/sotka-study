import styles from "./styles.module.scss";
import { useState } from "react";
import mainScreenFeedback from "../../../../data/main-screen-feedback.json";
import FeedbackVideoGridItem from "./FeedbackVideoGridItem";
import FeedbackTextGridItem from "./FeedbackTextGridItem";

export default function FeedbackGrid(): React.ReactElement {
    const [selectedFeedback, setSelectedFeedback] = useState(0);

    function changeSelectedFeedback(e: React.MouseEvent<HTMLElement>): void {
        const target = e.target as HTMLElement;
        const toggleSizeButton = target.closest(`.${styles.toggleSizeButton}`) as HTMLElement;
        const mainpageFeedbackItem = toggleSizeButton && toggleSizeButton.dataset.mainpageFeedbackItem;
        mainpageFeedbackItem && setSelectedFeedback(+mainpageFeedbackItem);
    }

    return (
        <div
            className={styles.gridArea}
            onClick={changeSelectedFeedback}
        >
            {
                mainScreenFeedback.map((item, index) => (
                    <FeedbackTextGridItem
                        key={item.id}
                        number={index + 1}
                        name={item.name}
                        photo={item.photo}
                        feedbackFull={item.feedbackFull}
                        feedbackShort={item.feedbackShort}
                        selectedFeedback={selectedFeedback}
                    />
                ))
            }
            < FeedbackVideoGridItem />
        </div>
    );
}
