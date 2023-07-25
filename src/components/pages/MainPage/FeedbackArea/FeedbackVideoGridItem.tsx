import ReactPlayer from "react-player";
import styles from "./styles.module.scss";
import { githubHomePageUrl } from "../../../../data/contants.json";

export default function FeedbackVideoGridItem(): React.ReactElement {
    return (
        <div className={`${styles.gridItem} ${styles.gridItem2}`}>
            <div className={styles.gridItemBody}>
                <div className={styles.name}>Аня</div>
                <div className={styles.media}>
                    <ReactPlayer
                        url={githubHomePageUrl + "video/feedback.mp4"}
                        controls={true}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
}