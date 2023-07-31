import Link from "next/link";
import styles from "./styles.module.scss";

export default function Contacts(): React.ReactElement {
    return (
        <div className={styles.smallCol}>
            <div className={styles.title}>
                <a href="tel:+78003330056">+7 (800) 333-00-56</a>
            </div>
            <div className={styles.callMeButton}>Перезвоните мне</div>
            <div className={styles.mailAndAdress}>
                <a className={styles.mailto} href="mailto:sotkaschoolonline@gmail.com">sotkaschoolonline@gmail.com</a>
                <Link
                    href="https://yandex.ru/maps/-/CCU1z2fVlB"
                    className={styles.adress}
                    target="_blank"
                >
                    ул. Волкова, 60/12, этаж 3, помещ. 4, Казань, Республика Татарстан, 420012, Россия
                </Link>
            </div>
        </div>
    );
}
