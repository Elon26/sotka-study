import Head from "next/head";
import { githubHomePageUrl } from "../../data/contants.json";
import { useRouter } from "next/router";

export default function TeachersPage(): React.ReactElement {
    const router = useRouter();
    router.push("/teachers/english");

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
