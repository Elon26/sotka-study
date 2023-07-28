import Container from "@/components/common/Container/Container";
import FreeLesson from "@/components/common/FreeLessonArea/FreeLesson";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";

export default function FreeLessonAndFAQArea(): React.ReactElement {
    return (
        <Container>
            <>
                <WhiteSpace
                    size="big"
                />
                <FreeLesson />
            </>
        </Container>
    );
}
