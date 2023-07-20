import MainPageHeader from "@/components/common/MainPageHeader/MainPageHeader";
import styles from "./styles.module.scss";
import SimpleText from "@/components/common/SimpleText/SimpleText";
import CustomerButtons from "../CustomerButtons/CustomerButtons";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";
import GiftPicture from "../GiftPicture/GiftPicture";
import Statistic from "../Statistic/Statistic";
import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import Shapes from "../Shapes/Shapes";
import PageArea from "@/components/common/PageArea/PageArea";
import Teachers from "../Teachers/Teachers";
import Education from "../Education/Education";

export default function StudentsArea(): React.ReactElement {
    return (
        <>
            <MainPageHeader
                firstLine="Подготовим к ЕГЭ и ОГЭ 2024"
                secondLine="с любого уровня на нужный балл"
            />
            <WhiteSpace
                size="middle"
            />
            <SimpleText
                text="всего от 3 650 ₽ за 4 предмета в месяц без доплат за 2-ой, 3-ий и 4-ый предмет!"
            />
            <WhiteSpace
                size="middle"
            />
            <CustomerButtons
                withSign={true}
                target="students"
            />
            <WhiteSpace
                size="middle"
            />
            <GiftPicture />
            <WhiteSpace
                size="middle"
            />
            <Statistic />
            <WhiteSpace
                size="middle"
            />
            <SecondPageHeader
                firstLine="Уверен, что сдашь экзамены на нужный балл?"
            />
            <WhiteSpace
                size="middle"
            />
            <Shapes />
            <WhiteSpace
                size="middle"
            />
            <CustomerButtons
                withSign={false}
                target="students"
            />
            <WhiteSpace
                size="middle"
            />
            <PageArea>
                <>
                    <SecondPageHeader
                        firstLine="Преподаватели, с которыми"
                        secondLine="тебе будет интересно"
                    />
                    <WhiteSpace
                        size="middle"
                    />
                    <Teachers />
                    <WhiteSpace
                        size="middle"
                    />
                    <SecondPageHeader
                        firstLine="Все, что тебе нужно для подготовки, —"
                        secondLine="на одной платформе"
                        secondLineColor="blue"
                    />
                    <WhiteSpace
                        size="middle"
                    />
                    <Education />
                </>
            </PageArea>
        </>
    );
}
