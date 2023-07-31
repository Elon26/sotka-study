import styles from "./styles.module.scss";
import { licenseIcon, skolkovoIcon } from "../../../data/icons";
import LinkItem from "./LinkItem";
import { githubHomePageUrl } from "../../../data/contants.json";

export default function Rewards(): React.ReactElement {
    return (
        <div className={styles.bigCol}>
            <div className={styles.title}>регалии</div>
            <div className={styles.colBody}>
                <LinkItem
                    link={githubHomePageUrl + "docs/license.pdf"}
                    icon={licenseIcon}
                    label="Образовательная лицензия"
                    size="full"
                />
                <LinkItem
                    link="https://navigator.sk.ru/orn/1123090"
                    icon={skolkovoIcon}
                    label="Резиденты Сколково"
                    size="full"
                />
            </div>
        </div>
    );
}
