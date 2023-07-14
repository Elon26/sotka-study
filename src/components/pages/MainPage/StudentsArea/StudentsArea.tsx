import MainPageHeader from "@/components/common/MainPageHeader/MainPageHeader";
import styles from "./styles.module.scss";
import SimpleText from "@/components/common/SimpleText/SimpleText";
import CustomerButtons from "../CustomerButtons/CustomerButtons";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";

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


        </>
    );
}
