import Container from "@/components/common/Container/Container";
import styles from "./styles.module.scss";

interface MainSwitchProps {
    mainSwitch: "students" | "parents"
    changeMainSwitch(value: "students" | "parents"): void
}

export default function MainSwitch({ mainSwitch, changeMainSwitch }: MainSwitchProps): React.ReactElement {
    function handleClick(e: React.MouseEvent<HTMLElement>): void {
        const targetElement = e.target as HTMLElement;

        if (targetElement.closest(`.${styles.parents}`)) {
            changeMainSwitch("parents");
        }

        if (targetElement.closest(`.${styles.students}`)) {
            changeMainSwitch("students");
        }
    }

    return (
        <Container>
            <div className={styles.wrapper}>
                <div className={styles.body} onClick={handleClick}>
                    <span className={`${styles.item} ${styles.students}`}>Ученикам</span>
                    <span className={`${styles.item} ${styles.parents}`}>Родителям</span>
                    <span className={`
                ${styles.selectedArea} 
                ${mainSwitch === "students" && styles.students}
                ${mainSwitch === "parents" && styles.parents}
                `}></span>
                </div>
            </div>
        </Container>
    );
}
