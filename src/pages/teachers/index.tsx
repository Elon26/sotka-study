import Head from "next/head";
import { githubHomePageUrl } from "../../data/contants.json";

export default function TeachersPage(): React.ReactElement {

    return (
        <>
            <Head>
                <title>Преподаватели</title>
                <meta name="description" content="Курсы подготовки к ЕГЭ и ОГЭ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={githubHomePageUrl + "favicon.png"} />
            </Head>
            <main>

            </main>
        </>
    );
}
