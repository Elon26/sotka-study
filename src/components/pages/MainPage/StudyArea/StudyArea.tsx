import PageArea from "@/components/common/PageArea/PageArea";
import Container from "@/components/common/Container/Container";
import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";
import Teachers from "../Teachers/Teachers";
import Education from "../Education/Education";

export default function StudyArea(): React.ReactElement {
    return (
        <PageArea
            color="white"
            innerPadding={false}
        >
            <Container>
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
            </Container>
        </PageArea>
    );
}
