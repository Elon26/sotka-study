import PageArea from "@/components/common/PageArea/PageArea";
import Container from "@/components/common/Container/Container";
import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";
import FeedbackGrid from "./FeedbackGrid";

export default function FeedbackArea(): React.ReactElement {
    return (
        <PageArea
            color="white"
            innerPadding={false}
        >
            <Container>
                <>
                    <SecondPageHeader
                        firstLine="Более 13 000 реальных отзывов."
                        secondLine="Вот часть из них."
                        firstLineColor="blue"
                    />
                    <WhiteSpace
                        size="middle"
                    />
                    <FeedbackGrid />
                </>
            </Container>
        </PageArea>
    );
}
