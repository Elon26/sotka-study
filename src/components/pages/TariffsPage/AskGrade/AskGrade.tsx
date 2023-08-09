import styles from "./styles.module.scss";
import Container from "@/components/common/Container/Container";
import MainPageHeader from "@/components/common/MainPageHeader/MainPageHeader";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";

interface AskGradeProps {
    grade: string
    changeGrade(grade: string): void
    changePage(page: string): void
}

export default function AskGrade({ grade, changeGrade, changePage }: AskGradeProps): React.ReactElement {
    return (
        <Container>
            <>
                <MainPageHeader
                    firstLine="В каком ты классе?"
                />
                <div className={styles.buttons}>
                    <div
                        className={`${styles.button} ${grade === "8" && styles.selected}`}
                        onClick={() => changeGrade("8")}
                    >
                        8 (перехожу в 9)
                    </div>
                    <div
                        className={`${styles.button} ${grade === "10" && styles.selected}`}
                        onClick={() => changeGrade("10")}
                    >
                        10 (перехожу в 11)
                    </div>
                </div>
                <WhiteSpace
                    size="middle"
                />
                <div className={styles.buttons}>
                    <div
                        className={`${styles.button} ${grade !== "8" && grade !== "10" && styles.disabled}`}
                        onClick={() => (grade === "8" || grade === "10") && changePage("AskPoint")}
                    >
                        далее
                    </div>
                </div>
                <WhiteSpace
                    size="middle"
                />
            </>
        </Container>
    );
}
