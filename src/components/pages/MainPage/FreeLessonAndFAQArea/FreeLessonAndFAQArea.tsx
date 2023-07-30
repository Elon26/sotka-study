import Container from "@/components/common/Container/Container";
import FreeLesson from "@/components/common/FreeLesson/FreeLesson";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";
import FAQ from "../FAQ/FAQ";

export default function FreeLessonAndFAQArea(): React.ReactElement {
    return (
        <Container>
            <>
                <WhiteSpace
                    size="big"
                />
                <FreeLesson />
                <WhiteSpace
                    size="big"
                />
                <FAQ />
                <WhiteSpace
                    size="big"
                />
            </>
        </Container>
    );
}
