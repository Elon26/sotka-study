import React, { useState } from "react";
import styles from "./styles.module.scss";

interface BurgerProps {
    isOpenBurger: boolean
    handleClick(): void
}

export default function Burger({ isOpenBurger, handleClick }: BurgerProps): React.ReactElement {
    return (
        <div className={styles.wrapper} onClick={handleClick}>
            <span className={`${styles.line} ${isOpenBurger && styles.open}`}></span>
            <span className={`${styles.line} ${isOpenBurger && styles.open}`}></span>
            <span className={`${styles.line} ${isOpenBurger && styles.open}`}></span>
        </div>
    );
}
