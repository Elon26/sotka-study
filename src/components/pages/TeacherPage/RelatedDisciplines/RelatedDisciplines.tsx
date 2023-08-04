import { Disciplines, ITeacher } from "@/data/models";
import styles from "./styles.module.scss";
import Link from "next/link";
import { getDisciplineData } from "@/utils/getDisciplineData";

interface RelatedDisciplinesProps {
    relatedDisciplines: Disciplines[]
    isOge: string | undefined
}

export default function RelatedDisciplines({ relatedDisciplines, isOge }: RelatedDisciplinesProps): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            <span className={styles.text}>с этим предметом чаще всего сдают:</span>
            {relatedDisciplines.map(relatedDiscipline => (
                <Link
                    key={"relatedDisciplineFromTeacherPage" + relatedDiscipline}
                    href={"/teachers/" + relatedDiscipline + (isOge ? "-oge" : "")}
                    className={styles.link}
                >
                    {getDisciplineData(relatedDiscipline).russianName}
                </Link>
            ))}
        </div>
    );
}
