import Head from "next/head";
import styles from "./styles.module.scss";
import { githubHomePageUrl } from "../../data/contants.json";
import AskGrade from "@/components/pages/TariffsPage/AskGrade/AskGrade";
import { useState } from "react";
import AskPoint from "@/components/pages/TariffsPage/AskPoint/AskPoint";
import ResultArea from "@/components/pages/TariffsPage/ResultArea/ResultArea";

export default function TariffsPage(): React.ReactElement {
    const [currentPage, setCurrentPage] = useState("AskGrade");
    const [grade, setGrade] = useState("0");
    const [ogePoint, setOgePoint] = useState(4);
    const [egePoint, setEgePoint] = useState(80);

    return (
        <>
            <Head>
                <title>Тарифы</title>
                <meta name="description" content="Курсы подготовки к ЕГЭ и ОГЭ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={githubHomePageUrl + "favicon.png"} />
            </Head>
            <main>
                {currentPage === "AskGrade" && (
                    <AskGrade
                        grade={grade}
                        changeGrade={grade => setGrade(grade)}
                        changePage={page => setCurrentPage(page)}
                    />
                )}
                {currentPage === "AskPoint" && (
                    <AskPoint
                        isOge={grade === "8"}
                        point={grade === "8"
                            ? ogePoint
                            : egePoint}
                        changePoint={grade === "8"
                            ? point => setOgePoint(point[0])
                            : point => setEgePoint(point[0])}
                        changePage={page => setCurrentPage(page)}
                    />
                )}
                {currentPage === "ReaultArea" && (
                    <ResultArea
                        isOge={grade === "8"}
                        isPro={ogePoint > 4 || egePoint > 84}
                        changePoint={grade === "8"
                            ? point => setOgePoint(point[0])
                            : point => setEgePoint(point[0])}
                    />
                )}
            </main>
        </>
    );
}
