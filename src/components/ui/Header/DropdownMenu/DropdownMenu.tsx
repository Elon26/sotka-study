import React, { useState } from "react";
import styles from "./styles.module.scss";
import Buttons from "../Buttons/Buttons";
import Menu from "../Menu/Menu";

interface DropdownMenuProps {
    isOpenBurger: boolean
}

export default function DropdownMenu({ isOpenBurger }: DropdownMenuProps): React.ReactElement {
    return (
        <div className={`${styles.wrapper} ${isOpenBurger && styles.open}`}>
            <div className={styles.body}>
                <Buttons screen="small" />
                <Menu />
            </div>
        </div>
    );
}
