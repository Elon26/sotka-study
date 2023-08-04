import { ITeacher } from "@/data/models";
import styles from "./styles.module.scss";
import Container from "@/components/common/Container/Container";
import Introduction from "../Introduction/Introduction";
import TeacherPageStatistic from "../TeacherPageStatistic/TeacherPageStatistic";
import AboutTeacher from "../AboutTeacher/AboutTeacher";
import Offer from "../Offer/Offer";
import RelatedDisciplines from "../RelatedDisciplines/RelatedDisciplines";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";

interface TopAreaProps {
    teacherData: ITeacher
    isOge: string | undefined
}

export default function TopArea({ teacherData, isOge }: TopAreaProps): React.ReactElement {
    return (
        <div className={styles.topArea}>
            <Container>
                <>
                    <Introduction
                        teacherData={teacherData}
                        isOge={isOge}
                    />
                    {teacherData.totalStudents &&
                        teacherData.excellentStudents &&
                        teacherData.perfectStudents &&
                        <TeacherPageStatistic
                            totalStudents={teacherData.totalStudents}
                            excellentStudents={teacherData.excellentStudents}
                            perfectStudents={teacherData.perfectStudents}
                        />
                    }
                    <WhiteSpace
                        size="middle"
                    />
                    <AboutTeacher
                        teacherData={teacherData}
                    />
                    <WhiteSpace
                        size="middle"
                    />
                    <Offer
                        discipline={teacherData.discipline}
                    />
                    <WhiteSpace
                        size="middle"
                    />
                    <RelatedDisciplines
                        relatedDisciplines={teacherData.relatedDisciplines}
                        isOge={isOge}
                    />
                </>
            </Container>
        </div>
    );
}
