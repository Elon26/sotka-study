import styles from "./styles.module.scss";
import { vkIcon, youtubeIcon, dzenIcon } from "../../../data/icons";
import LinkItem from "./LinkItem";

export default function Social(): React.ReactElement {
    return (
        <div className={styles.bigCol}>
            <div className={styles.title}>соц. сети</div>
            <div className={styles.colBody}>
                <LinkItem
                    link="https://vk.com/schoolsotka"
                    icon={vkIcon}
                    label="Вконтакте"
                    size="half"
                />
                <LinkItem
                    link="https://dzen.ru/id/6183e6ff607c807e848f5eb5"
                    icon={dzenIcon}
                    label="Яндекс.Дзен"
                    size="half"
                />
                <LinkItem
                    link="https://www.youtube.com/@sotka_online"
                    icon={youtubeIcon}
                    label="Ютуб"
                    size="half"
                />
            </div>
        </div>
    );
}

