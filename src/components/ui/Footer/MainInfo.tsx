import styles from "./styles.module.scss";
import Social from "./Social";
import Rewards from "./Rewards";
import Contacts from "./Contacts";

export default function MainInfo(): React.ReactElement {
    return (
        <div className={styles.row}>
            <Social />
            <Rewards />
            <Contacts />
        </div>
    );
}

