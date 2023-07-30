import React from "react";
import styles from "./styles.module.scss";
import Buttons from "../Buttons/Buttons";
import Menu from "../Menu/Menu";

interface DropdownMenuProps {
    isOpenBurger: boolean
    handleClick(e: React.MouseEvent<HTMLElement>): void
}

export default function DropdownMenu({ isOpenBurger, handleClick }: DropdownMenuProps): React.ReactElement {
    return (
        <div className={`${styles.wrapper} ${isOpenBurger && styles.open}`}        >
            <div className={styles.body}>
                <div onClick={handleClick}>
                    <Buttons screen="small" />
                    <Menu />
                </div>
            </div>
        </div>
    );
}
