import Head from "next/head";
import styles from "./styles.module.scss";
import { githubHomePageUrl } from "../../data/contants.json";
import Backup from "@/components/pages/AdminPage/Backup/Backup";

export default function AdminPage(): React.ReactElement {

    return (
        <>
            <Head>
                <title>Страница администратора</title>
                <meta name="description" content="Курсы подготовки к ЕГЭ и ОГЭ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={githubHomePageUrl + "favicon.png"} />
            </Head>
            <main>
                Страница администратора
                <Backup />
            </main>
        </>
    );
}
