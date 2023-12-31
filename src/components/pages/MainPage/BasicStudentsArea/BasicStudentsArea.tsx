import Container from "@/components/common/Container/Container";
import MainPageHeader from "@/components/common/MainPageHeader/MainPageHeader";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";
import SimpleText from "@/components/common/SimpleText/SimpleText";
import CustomerButtons from "../CustomerButtons/CustomerButtons";
import GiftPicture from "../GiftPicture/GiftPicture";
import Statistic from "../Statistic/Statistic";
import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import Shapes from "../Shapes/Shapes";

export default function BasicStudentsArea(): React.ReactElement {
    return (
        <Container>
            <>
                <MainPageHeader
                    firstLine="Подготовим к ЕГЭ и ОГЭ 2024"
                    secondLine="с любого уровня на нужный балл"
                />
                <WhiteSpace
                    size="middle"
                />
                <SimpleText
                    firstLine="всего от 3 700 ₽ за 4 предмета в месяц без доплат за 2-ой, 3-ий и 4-ый предмет!"
                    textSize="small"
                />
                <WhiteSpace
                    size="middle"
                />
                <CustomerButtons
                    withSign={true}
                    target="students"
                    firstButtonColor="purple"
                    secondButtonColor="gray-dark"
                />
                <WhiteSpace
                    size="middle"
                />
                <GiftPicture />
                <WhiteSpace
                    size="big"
                />
                <Statistic />
                <WhiteSpace
                    size="big"
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
                    firstButtonColor="purple"
                    secondButtonColor="gray-dark"
                />
                <WhiteSpace
                    size="big"
                />
            </>
        </Container>
    );
}
