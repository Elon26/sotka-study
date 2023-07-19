import Head from "next/head";
import styles from "./styles.module.scss";
import { githubHomePageUrl } from "../../data/contants.json";

export default function TariffsPage(): React.ReactElement {

    return (
        <>
            <Head>
                <title>Тарифы</title>
                <meta name="description" content="Курсы подготовки к ЕГЭ и ОГЭ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={githubHomePageUrl + "favicon.png"} />
            </Head>
            <main>
                Тарифы
            </main>
        </>
    );
}
