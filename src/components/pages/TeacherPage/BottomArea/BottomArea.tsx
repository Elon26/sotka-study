import Container from "@/components/common/Container/Container";
import styles from "./styles.module.scss";
import Regulations from "../Regulations/Regulations";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";
import FreeLesson from "@/components/common/FreeLesson/FreeLesson";

interface BottomAreaProps {
    youtubeLink: string
    youtubeTitle: string
}

export default function BottomArea({ youtubeLink, youtubeTitle }: BottomAreaProps): React.ReactElement {
    return (
        <div className={styles.bottomArea}>
            <Container>
                <>
                    <Regulations
                        youtubeLink={youtubeLink}
                        youtubeTitle={youtubeTitle}
                    />
                    <WhiteSpace
                        size="big"
                    />
                    <FreeLesson />
                </>
            </Container>
        </div>
    );
}
