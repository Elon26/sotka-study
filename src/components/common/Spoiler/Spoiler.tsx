import styles from "./styles.module.scss";
import { ISimpleObject } from "@/data/models";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { useState } from "react";

interface SpoilerProps {
    question: string
    answer: string
}

export default function Spoiler({ question, answer }: SpoilerProps): React.ReactElement {
    const { windowWidth } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`
                ${styles.FAQItem}
                ${isOpen && styles.open}
            `}
            onClick={() => setIsOpen(prev => !prev)}
        >
            <div className={styles.question}>
                <span>{question}</span>
                <span className={styles.spoilerButton}></span>
            </div>
            {(windowWidth >= 768 || windowWidth < 768 && isOpen) && <div className={styles.answer}>{answer}</div>}
        </div >
    );
}
