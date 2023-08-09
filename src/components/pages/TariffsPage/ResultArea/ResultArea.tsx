import MainPageHeader from "@/components/common/MainPageHeader/MainPageHeader";
import Container from "@/components/common/Container/Container";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";
import FourDisciplinePrepare from "./FourDisciplinePrepare";
import ScheduleAndMentor from "./ScheduleAndMentor";
import HomeworkWithCheck from "./HomeworkWithCheck";
import TestAndPsychologist from "./TestAndPsychologist";
import DifficultHomework from "./DifficultHomework";
import CareerGuidance from "./CareerGuidance";
import ButtonArea from "./ButtonArea";
import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import TariffSelection from "./TariffSelection";
import FreeLesson from "@/components/common/FreeLesson/FreeLesson";

interface AskPointProps {
    isOge: boolean
    isPro: boolean
    changePoint(value: number[]): void
}

export default function ResultArea({ isOge, isPro, changePoint }: AskPointProps): React.ReactElement {
    return (
        <Container>
            <>
                <MainPageHeader
                    firstLine={`Тебе подходит тариф ${isPro ? "Про" : "Стандарт"}!`}
                    secondLine="Смотри, что в нём есть:"
                />
                <WhiteSpace
                    size="middle"
                />
                <FourDisciplinePrepare />
                <WhiteSpace
                    size="small"
                />
                <ScheduleAndMentor />
                <WhiteSpace
                    size="small"
                />
                <HomeworkWithCheck />
                <WhiteSpace
                    size="small"
                />
                <TestAndPsychologist
                    isPro={isPro}
                />
                <WhiteSpace
                    size="small"
                />
                <CareerGuidance />
                {isPro && (
                    <>
                        <WhiteSpace
                            size="small"
                        />
                        <DifficultHomework />
                    </>
                )}
                <WhiteSpace
                    size="middle"
                />
                <ButtonArea />
                <WhiteSpace
                    size="big"
                />
                <SecondPageHeader
                    firstLine="Выбери подходящий тариф"
                />
                <WhiteSpace
                    size="middle"
                />
                <TariffSelection
                    isOge={isOge}
                    isPro={isPro}
                    changePoint={changePoint}
                />
                <WhiteSpace
                    size="big"
                />
                <FreeLesson />
                <WhiteSpace
                    size="middle"
                />
            </>
        </Container>
    );
}
