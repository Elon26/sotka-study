import Image from "next/image";
import styles from "./styles.module.scss";
import cursor from "public/images/main-page/cursor.webp";
import cylinder from "public/images/main-page/cylinder.webp";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

export default function Shapes(): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={`${styles.shape} ${styles.firstShape}`}>
                    <span>Уверен, что учитель в школе готовит неверно?</span>
                    <Image
                        className={styles.image}
                        src={cursor}
                        alt="курсор"
                        width={windowWidth > 1240 ? 60 : 55}
                        height={windowWidth > 1240 ? 60 : 55}
                        placeholder="blur"
                    />
                </div>
                <div className={`${styles.shape} ${styles.secondShape}`}>
                    <span>Не хватает знаний для сдачи на нужный балл?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={windowWidth > 1240 ? "166" : "106"} height={windowWidth > 1240 ? "189" : "128"} viewBox="0 0 157 181" fill="none" className={styles.image}><path fillRule="evenodd" clipRule="evenodd" d="M93.4152 171.692C128.139 129.252 166.426 50.6419 154.254 13.9347C138.759 -32.7946 61.2379 54.8006 62.9415 128.458C28.5299 64.7928 -5.24251 82.4929 26.9374 139.566C-23.7204 109.925 10.7539 173.355 22.9294 180.69L93.4152 171.692Z" fill="currentColor"></path></svg>
                    <div className={styles.effects}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`${styles.shape} ${styles.thirdShape}`}>
                    <span>Не знаешь, какой теории доверять?</span>
                </div>
                <div className={`${styles.shape} ${styles.fourthShape}`}>
                    <span>Не знаешь, где взять план подготовки?</span>
                    <Image
                        className={styles.image}
                        src={cylinder}
                        alt="цилиндр"
                        width={windowWidth > 1240 ? 141 : 91}
                        height={windowWidth > 1240 ? 124 : 80}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div >
    );
}
