import Head from "next/head";
import styles from "./styles.module.scss";
import LinkButton from "@/components/common/LinkButton/LinkButton";
import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import { githubHomePageUrl } from "../../data/contants.json";
import { useRouter } from "next/router";

export default function PageNotFound(): React.ReactElement {
    const router = useRouter();
    router.push(githubHomePageUrl + router.asPath);

    return (
        <>
            <Head>
                <title>Страница не найдена</title>
                <meta name="description" content="Курсы подготовки к ЕГЭ и ОГЭ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={githubHomePageUrl + "favicon.png"} />
            </Head>
            <main>
                <div className="container">
                    <div className={styles.body}>
                        <SecondPageHeader
                            firstLine="Страница не найдена! :'("
                        />
                        <LinkButton
                            text="Вернуться"
                            link="/"
                            size="middle"
                            color="blue"
                            border="none"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
