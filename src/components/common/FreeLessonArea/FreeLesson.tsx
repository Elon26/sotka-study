import Image from "next/image";
import FreeLessonForm from "./FreeLessonForm";
import styles from "./styles.module.scss";
import freeLessonFormPoster from "public/images/common/freeLessonFormPoster.webp";

export default function FreeLesson(): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.title}>Начни обучение с бесплатного вводного урока</div>
                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <div className={styles.listNumber}>01</div>
                            <div className={styles.listText}>познакомим с онлайн-школой</div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listNumber}>02</div>
                            <div className={styles.listText}>расскажем, как проходят занятия</div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listNumber}>03</div>
                            <div className={styles.listText}>покажем, как мы можем помочь именно тебе</div>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.imageCol}>
                    <div className={styles.imageBody}>
                        <Image
                            className={styles.image}
                            src={freeLessonFormPoster}
                            alt="учителя"
                            width={1920}
                            height={1662}
                            placeholder="blur"
                        />
                    </div>
                </div> */}
                <div className={styles.col}>
                    <div className={styles.text}>просто оставь заявку, мы перезвоним с 8:00 до 22:00 и ответим на все вопросы</div>
                    <FreeLessonForm />
                </div>
            </div>
        </div>
    );
}
