import { ITeacher } from "@/data/models";
import styles from "./styles.module.scss";
import Image from "next/image";
import { getDisciplineData } from "@/utils/getDisciplineData";
import CustomerButtons from "../../MainPage/CustomerButtons/CustomerButtons";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import LinkButton from "@/components/common/LinkButton/LinkButton";

interface IntroductionProps {
    teacherData: ITeacher
    isOge: string | undefined
}

export default function Introduction({ teacherData, isOge }: IntroductionProps): React.ReactElement {
    const { windowWidth } = useWindowDimensions();
    const disciplineData = getDisciplineData(teacherData.discipline);

    return (
        <div className={styles.row}>
            <div className={styles.infoCol}>
                <h1 className={styles.name}>{teacherData.name}</h1>
                <div className={styles.info}>
                    <span className={`${styles.disciplineLogo} ${styles[teacherData.discipline]}`}>{disciplineData.logo}</span>
                    <span>{windowWidth >= 1024 ? `преподаватель по ${disciplineData.declination}` : disciplineData.russianName}</span>
                    <span className={styles.dot}></span>
                    <span>{isOge ? "огэ" : "егэ"}</span>
                </div>
                <div className={styles.greeting}>{teacherData.greeting}</div>
                <div className={styles.buttons}>
                    <LinkButton
                        text="Вводный урок"
                        link="/#form"
                        size={windowWidth >= 1024 || windowWidth < 768 ? "middle" : "small"}
                        color="blue"
                        border="none"
                    />
                    <LinkButton
                        text="Купить курс"
                        link="/tariffs"
                        size={windowWidth >= 1024 || windowWidth < 768 ? "middle" : "small"}
                        color="purple"
                        border="none"
                    />
                </div>
            </div>
            <div className={styles.photoCol}>
                <div className={styles.photoWrapper}>
                    <Image
                        className={styles.photo}
                        src={teacherData.photoMain}
                        alt="преподаватель"
                        width={575}
                        height={520}
                    />
                </div>
            </div>
        </div>
    );
}
