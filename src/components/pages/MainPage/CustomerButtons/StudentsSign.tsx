import styles from "./styles.module.scss";
import { calcNextMonth } from "./CalcNextMonth";
import { githubHomePageUrl } from "../../../../data/contants.json";

export default function StudentsSign(): React.ReactElement {
    const selectedMonth = calcNextMonth();

    return (
        <div className={styles.studentsSign}>
            <img className={styles.studentsLine} src={githubHomePageUrl + "icons/curvedLine.jpg"} alt="кривая" />
            <div className={styles.studentsText}>
                самая выгодная цена <span>до 15 {selectedMonth}!</span>
            </div>
        </div>
    );
}
