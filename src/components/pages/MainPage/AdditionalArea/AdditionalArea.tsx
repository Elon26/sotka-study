import Container from "@/components/common/Container/Container";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";
import PageArea from "@/components/common/PageArea/PageArea";
import Progress from "../Progress/Progress";
import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import SummerCourse from "../SummerCourse/SummerCourse";
import TargetMark from "../TargetMark/TargetMark";
import CustomerButtons from "../CustomerButtons/CustomerButtons";

export default function AdditionalArea(): React.ReactElement {
    return (

        <Container>
            <>
                <WhiteSpace
                    size="big"
                />
                <PageArea
                    color="blackLight"
                    innerPadding={true}
                >
                    <Progress />
                </PageArea>
                <WhiteSpace
                    size="big"
                />
                <SecondPageHeader
                    firstLine="Ещё будет бесплатный"
                    secondLine="летний курс, где ты:"
                />
                <WhiteSpace
                    size="middle"
                />
                <SummerCourse />
                <WhiteSpace
                    size="middle"
                />
                <TargetMark />
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
