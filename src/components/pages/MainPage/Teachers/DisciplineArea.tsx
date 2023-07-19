import { Disciplines } from "@/data/models";
import styles from "./styles.module.scss";
import SimpleButton from "@/components/common/SimpleButton/SimpleButton";
import { getDisciplineData } from "@/utils/getDisciplineData";

interface DisciplineAreaProps {
    disciplines: Disciplines[]
    selectedDiscipline: Disciplines
}

export default function DisciplineArea({ disciplines, selectedDiscipline }: DisciplineAreaProps): React.ReactElement {
    return (
        <div className={styles.disciplineArea}>
            {disciplines.map(discipline => (
                <SimpleButton
                    key={discipline + Date.now()}
                    name={discipline}
                    text={getDisciplineData(discipline).russianName}
                    color={selectedDiscipline === discipline ? "red" : "gray"}
                    type="дисциплина"
                />)
            )}
        </div>
    );
}
