import Link from "next/link";
import styles from "./styles.module.scss";
import { BsBoxArrowInRight } from "react-icons/bs";

interface LinkButtonProps {
    text: string
    link: string
    size: "mini" | "small" | "middle" | "big"
    color: "blue" | "transparent"
    border: "none" | "white"
    withIcon: boolean
}

export default function LinkButton({ text, link, size, color, border, withIcon }: LinkButtonProps): React.ReactElement {
    return (
        <Link
            href={link}
            className={`
                ${styles.wrapper}
                ${size === "mini" && styles.mini}
                ${size === "small" && styles.small}
                ${size === "middle" && styles.middle}
                ${size === "big" && styles.big}
                ${color === "blue" && styles.blue}
                ${border === "white" && styles.whiteBorder}
                ${withIcon && styles.withIcon}
                `}>
            {link === "login" && <BsBoxArrowInRight className={`${size === "mini" && styles.badsvg}`} />}
            <span>{text}</span>
        </Link>
    );
}
