import InputRange from "@/components/common/InputRange/InputRange";
import styles from "./styles.module.scss";
import Container from "@/components/common/Container/Container";
import MainPageHeader from "@/components/common/MainPageHeader/MainPageHeader";
import SimpleText from "@/components/common/SimpleText/SimpleText";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";

interface AskPointProps {
    isOge: boolean
    point: number
    changePoint(value: number[]): void
    changePage(page: string): void
}

export default function AskPoint({ isOge, point, changePoint, changePage }: AskPointProps): React.ReactElement {
    return (
        <Container>
            <>
                <MainPageHeader
                    firstLine={`На ${isOge ? "какую оценку" : "сколько баллов"} хочешь`}
                    secondLine="сдать экзамен?"
                />
                <WhiteSpace
                    size="small"
                />
                <SimpleText
                    firstLine="это поможет нам подсказать подходящий тариф"
                    textSize="middle"
                />
                <WhiteSpace
                    size="middle"
                />
                <InputRange
                    step={1}
                    min={isOge ? 2 : 0}
                    max={isOge ? 5 : 100}
                    value={point}
                    changePoint={changePoint}
                />
                <WhiteSpace
                    size="big"
                />
                <div
                    className={styles.button}
                    onClick={() => changePage("ReaultArea")}
                >далее</div>
            </>
        </Container>
    );
}
