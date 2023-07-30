import Image from "next/image";
import FreeLessonForm from "./FreeLessonForm";
import styles from "./styles.module.scss";
import freeLessonFormPoster from "public/images/common/freeLessonFormPoster.webp";

export default function FreeLesson(): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.infoCol}>
                    <div className={styles.title}>Начни обучение с бесплатного вводного урока</div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <div className={styles.listNumber}>01</div>
                            <div className={styles.listText}>познакомим с онлайн-школой</div>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.listNumber}>02</div>
                            <div className={styles.listText}>расскажем, как проходят занятия</div>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.listNumber}>03</div>
                            <div className={styles.listText}>покажем, как мы можем помочь именно тебе</div>
                        </li>
                    </ul>
                </div>
                <div className={styles.formCol}>
                    <div className={styles.text}>просто оставь заявку, мы перезвоним с 8:00 до 22:00 и ответим на все вопросы</div>
                    <FreeLessonForm />
                </div>
                <Image
                    className={styles.image}
                    src={freeLessonFormPoster}
                    alt="учителя"
                    width={1920}
                    height={1662}
                    placeholder="blur"
                />
            </div>
        </div>
    );
}
