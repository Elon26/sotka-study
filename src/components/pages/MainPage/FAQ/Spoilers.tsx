import styles from "./styles.module.scss";
import questions from "../../../../data/FAQ.json";
import Spoiler from "@/components/common/Spoiler/Spoiler";

export default function Spoilers(): React.ReactElement {
    const firstCol = [questions[0], questions[1]];
    const secondCol = [questions[2], questions[3]];

    return (
        <div className={styles.FAQ}>
            <div className={styles.col}>
                {firstCol.map(item => (
                    <Spoiler
                        key={"FAQFromMainPage" + item.question}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
            <div className={styles.col}>
                {secondCol.map(item => (
                    <Spoiler
                        key={"FAQFromMainPage" + item.question}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    );
}
