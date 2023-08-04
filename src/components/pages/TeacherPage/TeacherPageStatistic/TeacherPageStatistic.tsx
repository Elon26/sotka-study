import { ITeacher } from "@/data/models";
import styles from "./styles.module.scss";
import Image from "next/image";
import { getDisciplineData } from "@/utils/getDisciplineData";
import CustomerButtons from "../../MainPage/CustomerButtons/CustomerButtons";
import divideNumber from "@/utils/divideNumber";
import { generateEndingForSingular } from "@/utils/generateEnding";

interface TeacherPageStatisticProps {
    totalStudents: number
    excellentStudents: number
    perfectStudents: number
}

export default function TeacherPageStatistic({ totalStudents, excellentStudents, perfectStudents }: TeacherPageStatisticProps): React.ReactElement {
    return (
        <div className={styles.row}>
            <div className={styles.item}>
                <div className={styles.title}>{divideNumber(totalStudents)}</div>
                <div className={styles.description}>всего учеников</div>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>{divideNumber(excellentStudents)}</div>
                <div className={styles.description}>{`сдали на 80+`}</div>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>{divideNumber(perfectStudents)}</div>
                <div className={styles.description}>{`стобалльник${generateEndingForSingular(perfectStudents)}`}</div>
            </div>
        </div>
    );
}
