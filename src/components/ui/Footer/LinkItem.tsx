import Link from "next/link";
import styles from "./styles.module.scss";

interface LinkItemProps {
    link: string
    icon: React.ReactElement
    label: string
    size: "full" | "half"
}

export default function LinkItem({ link, icon, label, size }: LinkItemProps): React.ReactElement {
    return (
        <Link
            href={link}
            className={`
                ${styles.linkItem}
                ${size === "full" && styles.fullSize}
                ${size === "half" && styles.halfSize}
            `}
            target="_blank"
        >
            <span className={`
                ${styles.icon}
                ${label === "Вконтакте" && styles.vkIcon}
                ${label === "Яндекс.Дзен" && styles.dzenIcon}
                ${label === "Ютуб" && styles.youtubeIcon}
                ${label === "Образовательная лицензия" && styles.licenseIcon}
                ${label === "Резиденты Сколково" && styles.skolkovoIcon}
            `}>
                {icon}
            </span>
            <span>
                {label}
            </span>
        </Link>
    );
}

