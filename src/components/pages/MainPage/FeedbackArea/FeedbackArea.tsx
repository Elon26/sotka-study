import PageArea from "@/components/common/PageArea/PageArea";
import Container from "@/components/common/Container/Container";
import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";
import FeedbackGrid from "./FeedbackGrid";
import SimpleText from "@/components/common/SimpleText/SimpleText";
import pig from "public/images/main-page/pig.webp";
import Image from "next/image";
import styles from "./styles.module.scss";
import FeedbackPig from "./FeedbackPig";

export default function FeedbackArea(): React.ReactElement {
    return (
        <PageArea
            color="white"
            innerPadding={false}
        >
            <>
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
                        <WhiteSpace
                            size="big"
                        />
                        <WhiteSpace
                            size="big"
                        />
                        <SecondPageHeader
                            firstLine="В любой момент вернём деньги"
                        />
                        <WhiteSpace
                            size="small"
                        />
                        <SimpleText
                            firstLine="Ты всегда сможешь вернуть деньги за оставшуюся часть программы."
                            secondLine="Для этого не нужно ничего доказывать."
                            textSize="middle"
                        />
                    </>
                </Container>
                <WhiteSpace
                    size="middle"
                />
                <FeedbackPig />
                <WhiteSpace
                    size="small"
                    id="form"
                />
            </>
        </PageArea>
    );
}
