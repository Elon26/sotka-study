import { ITeacher } from "@/data/models";
import styles from "./styles.module.scss";
import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import FirstShape from "./FirstShape";
import { generateEndingForSingular } from "@/utils/generateEnding";
import SecondShape from "./SecondShape";
import ThirdShape from "./ThirdShape";
import FourthShape from "./FourthShape";
import FifthShape from "./FifthShape";
import SixthShape from "./SixthShape";
import SeventhShape from "./SeventhShape";

interface AboutTeacherProps {
    teacherData: ITeacher
}

export default function AboutTeacher({ teacherData }: AboutTeacherProps): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            <SecondPageHeader
                firstLine="Обо мне"
            />
            <div className={styles.firstRow}>
                <FirstShape
                    text={teacherData.totalStudents &&
                        teacherData.excellentStudents &&
                        teacherData.perfectStudents ?
                        `выпущены ${teacherData.perfectStudents} стобалльник${generateEndingForSingular(teacherData.perfectStudents)} и ${teacherData.excellentStudents} ученик${generateEndingForSingular(teacherData.excellentStudents)} на 80+ баллов` :
                        "более 90% учеников получили высший балл по ОГЭ"}
                />
                <SecondShape
                    text={teacherData.advantages[2]}
                />
                <ThirdShape
                    text={teacherData.isExpert ? "удостоверение эксперта ЕГЭ" : "множество положительных отзывов"}
                />
            </div>
            <div className={styles.secondRow}>
                <FourthShape
                    text="подписывайся на мои соцсети!"
                    vkLink={teacherData.vk}
                    youtubeLink={teacherData.youtube}
                    telegramLink={teacherData.telegram}
                />
                <FifthShape
                    text={`опыт преподавания >${teacherData.experience} лет`}
                />
                <SixthShape
                    text={teacherData.advantages[1]}
                />
                <SeventhShape
                    text={teacherData.advantages[0]}
                />
            </div>
        </div>
    );
}
