import Image from "next/image";
import styles from "./styles.module.scss";
import mentor from "public/images/tariffs-page/mentor.webp";

export default function ScheduleAndMentor(): React.ReactElement {
    return (
        <div className={styles.row}>
            <div className={styles.halfRowCol}>
                <div className={`${styles.infoItem} ${styles.halfRowItem}`}>
                    <div className={styles.title}>До 20 занятий по предмету в месяц</div>
                    <div className={`${styles.text} ${styles.shortArea}`}>Каждую неделю от 2 до 5 занятий по каждому предмету</div>
                    <div className={styles.numbers}>
                        <span>16</span>
                        <span>17</span>
                        <span>18</span>
                        <span>19</span>
                        <span>20</span>
                    </div>
                </div>
            </div>
            <div className={styles.halfRowCol}>
                <div className={`${styles.infoItem} ${styles.halfRowItem}`}>
                    <div className={styles.title}>Онлайн-наставник</div>
                    <div className={`${styles.text}`}>Наставник, который уже сдал экзамен по твоему предмету на 90+ баллов и готов объяснить тебе любую тему</div>
                    <Image
                        className={`${styles.bottomImage}`}
                        src={mentor}
                        alt="книга"
                        width={575}
                        height={265}
                    />
                </div>
            </div>
        </div>
    );
}
