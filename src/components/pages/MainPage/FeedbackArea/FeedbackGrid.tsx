import styles from "./styles.module.scss";
import mainScreenFeedback from "../../../../data/main-screen-feedback.json";
import FeedbackGridItem from "./FeedbackTextGridItem";
import FeedbackVideoGridItem from "./FeedbackVideoGridItem";

export default function FeedbackGrid(): React.ReactElement {
    return (
        <div className={styles.gridArea}>
            {mainScreenFeedback.map((item, index) => (
                <FeedbackGridItem
                    key={item.id}
                    number={index + 1}
                    name={item.name}
                    photo={item.photo}
                    feedbackFull={item.feedbackFull}
                    feedbackShort={item.feedbackShort}
                />
            ))}
            <FeedbackVideoGridItem />
        </div>
    );
}
