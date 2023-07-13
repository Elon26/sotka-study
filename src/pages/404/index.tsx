import Head from "next/head";
import styles from "./styles.module.scss";
import LinkButton from "@/components/common/LinkButton/LinkButton";

export default function Comment(): React.ReactElement {
    const text = "Страница не найдена! :'(";

    return (
        <>
            <Head>
                <title>Страница не найдена</title>
                <meta name="description" content="Курсы подготовки к ЕГЭ и ОГЭ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>
                <div className="container">
                    <div className={styles.body}>
                        <h1 className={styles.title}>{text}</h1>
                        <LinkButton
                            text="Вернуться"
                            link="/"
                            size="middle"
                            color="blue"
                            border="none"
                            withIcon={false}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
