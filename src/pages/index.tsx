import MainPage from "@/components/pages/MainPage/MainPage";
import Head from "next/head";

export default function Home(): React.ReactElement {
    return (
        <>
            <Head>
                <title>Курсы подготовки к ЕГЭ и ОГЭ</title>
                <meta name="description" content="Курсы подготовки к ЕГЭ и ОГЭ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>
                <MainPage />
            </main>
        </>
    );
}
