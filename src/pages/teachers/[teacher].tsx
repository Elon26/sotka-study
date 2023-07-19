import Head from "next/head";
import styles from "./styles.module.scss";
import { githubHomePageUrl } from "../../data/contants.json";
import { useRouter } from "next/router";

export default function TeacherPage(): React.ReactElement {
    const router = useRouter();
    const currentDiscipline = router.query.teacher as string;

    // ! ДОБАВИТЬ В TITLE ДАННЫЕ О ПРЕДМЕТЕ ИЛИ ПРЕПОДАВАТЕЛЕ

    // ! НАСТРОИТЬ ПЕРЕАДРЕСАЦИЮ НА 404 ДЛЯ НЕСУЩЕСТВУЮЩИХ ПРЕДМЕТОВ

    return (
        <>
            <Head>
                <title>Страница преподавателя</title>
                <meta name="description" content="Курсы подготовки к ЕГЭ и ОГЭ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={githubHomePageUrl + "favicon.png"} />
            </Head>
            <main>
                {currentDiscipline}
            </main>
        </>
    );
}
