import Head from "next/head";
import styles from "./styles.module.scss";

export default function Comment(): React.ReactElement {

    return (
        <>
            <Head>
                <title>Регистрация</title>
                <meta name="description" content="Курсы подготовки к ЕГЭ и ОГЭ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon.png" />
            </Head>
            <main>
                Регистрация
            </main>
        </>
    );
}
