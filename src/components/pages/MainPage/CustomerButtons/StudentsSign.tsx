import styles from "./styles.module.scss";
import { calcNextMonth } from "./CalcNextMonth";
import { githubHomePageUrl } from "../../../../data/contants.json";
import Image from "next/image";

export default function StudentsSign(): React.ReactElement {
    const selectedMonth = calcNextMonth();

    return (
        <div className={styles.studentsSign}>
            <Image
                className={styles.studentsLine}
                src={githubHomePageUrl + "icons/curvedLine.jpg"}
                alt="кривая"
                width={31}
                height={36}
            />
            <div className={styles.studentsText}>
                самая выгодная цена <span>до 15 {selectedMonth}!</span>
            </div>
        </div>
    );
}
