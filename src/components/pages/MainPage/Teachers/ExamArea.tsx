import styles from "./styles.module.scss";
import SimpleButton from "@/components/common/SimpleButton/SimpleButton";
import { exams } from "../../../../data/contants.json";
import { Disciplines, Exams } from "@/data/models";

interface ExamAreaProps {
    selectedExam: Exams | Disciplines
}

export default function ExamArea({ selectedExam }: ExamAreaProps): React.ReactElement {
    return (
        <div className={styles.examArea}>
            {exams.map(exam => (
                <SimpleButton
                    key={exam + Date.now()}
                    name={exam}
                    text={exam}
                    color={selectedExam === exam ? "black" : "gray"}
                    type="экзамен"
                />)
            )}
        </div>
    );
}
