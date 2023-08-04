import Head from "next/head";
import styles from "./styles.module.scss";
import { githubHomePageUrl } from "../../data/contants.json";
import { useRouter } from "next/router";
import { getEgeTeacher } from "@/store/egeTeachers";
import { useAppSelector } from "@/hooks/reduxHook";
import { getOgeTeacher } from "@/store/ogeTeachers";
import { Disciplines } from "@/data/models";
import TopArea from "@/components/pages/TeacherPage/TopArea/TopArea";
import BottomArea from "@/components/pages/TeacherPage/BottomArea/BottomArea";


export default function TeacherPage(): React.ReactElement {
    const router = useRouter();
    const routerData = router.query.teacher as string;
    const routerArrayData = routerData.split("-");
    const currentDiscipline = routerArrayData[0] as Disciplines;
    const isOge = routerArrayData[1] as string | undefined;
    const egeTeacherData = useAppSelector(getEgeTeacher(currentDiscipline));
    const ogeTeacherData = useAppSelector(getOgeTeacher(currentDiscipline));
    const teacherData = isOge ? ogeTeacherData : egeTeacherData;

    if (!teacherData) {
        router.push("/not-found");
    }

    return (
        <>
            <Head>
                <title>{teacherData?.name}</title>
                <meta name="description" content="Курсы подготовки к ЕГЭ и ОГЭ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={githubHomePageUrl + "favicon.png"} />
            </Head>
            <main className={styles.teacherPage}>
                {teacherData && (
                    <>
                        <TopArea
                            teacherData={teacherData}
                            isOge={isOge}
                        />
                        <BottomArea
                            youtubeLink={teacherData.youtubeLink}
                            youtubeTitle={teacherData.youtubeTitle}
                        />
                    </>
                )}
            </main>
        </>
    );
}
