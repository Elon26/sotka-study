import Link from "next/link";
import styles from "./styles.module.scss";
import { BsBoxArrowInRight } from "react-icons/bs";

interface LinkButtonProps {
    text: string
    link: string
    size: "mini" | "small" | "middle" | "big" | "custom"
    color: "blue" | "purple" | "gray-dark" | "transparent" | "black"
    border: "none" | "white"
    withIcon?: boolean
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
                ${size === "custom" && styles.custom}
                ${color === "blue" && styles.blue}
                ${color === "purple" && styles.purple}
                ${color === "gray-dark" && styles.grayDark}
                ${color === "black" && styles.black}
                ${border === "white" && styles.whiteBorder}
                ${withIcon && styles.withIcon}
                `}>
            {withIcon && link === "login" && <BsBoxArrowInRight />}
            <span>{text}</span>
        </Link>
    );
}
