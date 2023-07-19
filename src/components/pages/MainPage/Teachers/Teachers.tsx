import { useAppSelector } from "@/hooks/reduxHook";
import styles from "./styles.module.scss";
import { getEgeDisciplines, getEgeTeachersList } from "@/store/egeTeachers";
import { getOgeDisciplines, getOgeTeachersList } from "@/store/ogeTeachers";
import { useEffect, useState } from "react";
import { Disciplines, Exams, ITeacher } from "@/data/models";
import DisciplineArea from "./DisciplineArea";
import ExamArea from "./ExamArea";
import TeacherArea from "./TeacherArea";

export default function Teachers(): React.ReactElement {
    const egeTeachers = useAppSelector(getEgeTeachersList());
    const ogeTeachers = useAppSelector(getOgeTeachersList());
    const egeDisciplines = useAppSelector(getEgeDisciplines());
    const ogeDisciplines = useAppSelector(getOgeDisciplines());

    const [selectedExam, setSelectedExam] = useState<Exams>("егэ");
    const [selectedEgeDiscipline, setSelectedEgeDiscipline] = useState<Disciplines>(egeDisciplines[0]);
    const [selectedOgeDiscipline, setSelectedOgeDiscipline] = useState<Disciplines>(ogeDisciplines[0]);
    const [selectedTeacher, setSelectedTeacher] = useState<ITeacher>(egeTeachers[0]);

    function changeSelectedArea(e: React.MouseEvent<HTMLElement>) {
        const target = e.target as HTMLElement;
        const buttonExamName = target.closest("button")?.dataset.buttonExamName as Exams;
        const buttonDisciplineName = target.closest("button")?.dataset.buttonDisciplineName as Disciplines;

        if (buttonExamName) setSelectedExam(buttonExamName);

        if (buttonDisciplineName) {
            if (selectedExam === "егэ") setSelectedEgeDiscipline(buttonDisciplineName);
            if (selectedExam === "огэ") setSelectedOgeDiscipline(buttonDisciplineName);
        }
    }

    useEffect(() => {
        if (selectedExam === "егэ") {
            const currentTeacher = egeTeachers.find(teacher => teacher.discipline === selectedEgeDiscipline);
            currentTeacher && setSelectedTeacher(currentTeacher);
        }

        if (selectedExam === "огэ") {
            const currentTeacher = ogeTeachers.find(teacher => teacher.discipline === selectedOgeDiscipline);
            currentTeacher && setSelectedTeacher(currentTeacher);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedExam, selectedEgeDiscipline, selectedOgeDiscipline]);

    return (
        <>
            <div
                className={styles.examAndDisciplineArea}
                onClick={changeSelectedArea}
            >
                <ExamArea selectedExam={selectedExam} />
                <DisciplineArea
                    disciplines={selectedExam === "егэ" ? egeDisciplines : ogeDisciplines}
                    selectedDiscipline={selectedExam === "егэ" ? selectedEgeDiscipline : selectedOgeDiscipline}
                />
            </div>
            <TeacherArea
                name={selectedTeacher.name}
                experience={selectedTeacher.experience}
                advantages={selectedTeacher.advantages}
                perfectStudents={selectedTeacher.perfectStudents}
                excellentStudents={selectedTeacher.excellentStudents}
                isExpert={selectedTeacher.isExpert}
                photo={selectedTeacher.photoMain}
                discipline={selectedTeacher.discipline}
                isOge={selectedExam === "огэ"}
                vkLink={selectedTeacher.vk}
                youtubeLink={selectedTeacher.youtube}
                telegramLink={selectedTeacher.telegram}
            />
        </>
    );
}
