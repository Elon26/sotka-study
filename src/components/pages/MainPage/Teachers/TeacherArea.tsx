import Image from "next/image";
import styles from "./styles.module.scss";
import { generateEndingForSingular } from "@/utils/generateEnding";
import divideNumber from "@/utils/divideNumber";
import LinkButton from "@/components/common/LinkButton/LinkButton";
import IconButton from "@/components/common/IconButton/IconButton";

interface TeacherAreaProps {
    name: string
    experience: number
    advantages: string[]
    perfectStudents?: number
    excellentStudents?: number
    isExpert?: boolean
    photo: string
    discipline: string
    isOge: boolean
    vkLink: string
    youtubeLink: string
    telegramLink: string
    isSelectedTeacher: boolean
}

export default function TeacherArea({
    name,
    experience,
    advantages,
    perfectStudents,
    excellentStudents,
    isExpert,
    photo,
    discipline,
    isOge,
    vkLink,
    youtubeLink,
    telegramLink,
    isSelectedTeacher
}: TeacherAreaProps): React.ReactElement {
    return (
        <div className={`${styles.teacherArea} ${isSelectedTeacher && styles.visibile}`}>
            <div className={styles.info}>
                <div className={styles.name}>
                    {name}
                </div>
                <ul className={styles.advantages}>
                    <li className={styles.advantage}>{`опыт преподавания > ${experience} лет`}</li>
                    {advantages.map(advantage => (
                        <li
                            key={advantage + Date.now()}
                            className={styles.advantage}
                        >{advantage}</li>
                    ))}
                    {perfectStudents && excellentStudents && <li className={styles.advantage}>{`${divideNumber(perfectStudents)} стобалльник${generateEndingForSingular(perfectStudents)} и ${divideNumber(excellentStudents)} ученик${generateEndingForSingular(excellentStudents)} на 80+ баллов`}</li>}
                    {isExpert && < li className={`${styles.advantage} ${styles.expert}`}>удостоверение эксперта ЕГЭ</li>}
                </ul>
                <div className={styles.buttons}>
                    <LinkButton
                        text="Подробнее обо мне"
                        link={"teachers/" + discipline + (isOge ? "-oge" : "")}
                        size="custom"
                        color="black"
                        border="none"
                    />
                    <IconButton
                        link={vkLink}
                        icon="vk"
                    />
                    <IconButton
                        link={youtubeLink}
                        icon="youtube"
                    />
                    <IconButton
                        link={telegramLink}
                        icon="telegramm"
                    />
                </div>
            </div>
            <div className={styles.photo}>
                <Image
                    className={styles.image}
                    src={photo}
                    alt="график"
                    width={650}
                    height={600}
                    priority
                />
            </div>
        </div >
    );
}
