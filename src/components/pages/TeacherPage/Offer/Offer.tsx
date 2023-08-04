import { Disciplines, ITeacher } from "@/data/models";
import styles from "./styles.module.scss";
import { getDisciplineData } from "@/utils/getDisciplineData";
import LinkButton from "@/components/common/LinkButton/LinkButton";
import Image from "next/image";
import offer from "public/images/teacher-page/offer.webp";

interface OfferProps {
    discipline: Disciplines
}

export default function Offer({ discipline }: OfferProps): React.ReactElement {
    const disciplineData = getDisciplineData(discipline);

    return (
        <div className={styles.wrapper}>
            <div className={styles.textArea}>
                <h2 className={styles.title}>{`Начинай готовиться со мной к ${disciplineData.declination}`}</h2>
                <div className={styles.text}>Ещё 3 предмета сможешь выбрать бесплатно</div>
                <Image
                    className={styles.image}
                    src={offer}
                    alt="медиа"
                    width={550}
                    height={300}
                    placeholder="blur"
                />
                <div className={styles.buttons}>
                    <LinkButton
                        text="Записаться"
                        link="/#form"
                        size="middle"
                        color="black"
                        border="none"
                    />
                    <LinkButton
                        text="Купить курс"
                        link="/tariffs"
                        size="middle"
                        color="purple"
                        border="none"
                    />
                </div>
            </div>
        </div>
    );
}
