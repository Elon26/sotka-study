import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";
import Spoilers from "./Spoilers";

export default function FAQ(): React.ReactElement {
    return (
        <div>
            <SecondPageHeader
                firstLine="Часто задаваемые вопросы"
            />
            <WhiteSpace
                size="middle"
            />
            <Spoilers />
        </div>
    );
}
