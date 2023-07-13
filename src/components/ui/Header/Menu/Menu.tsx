import styles from "./styles.module.scss";
import headerMenu from "../../../../data/headerMenu.json";
import Link from "next/link";

export default function Menu(): React.ReactElement {
    return (
        <nav className={styles.wrapper}>
            {headerMenu.map(menuItem => (
                <Link
                    key={menuItem.id}
                    href={menuItem.link}
                    className={styles.item}
                >
                    {menuItem.label}
                </Link>
            ))}
        </nav>
    );
}
