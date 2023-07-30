import React, { useState, useEffect } from "react";
import Menu from "./Menu/Menu";
import Logo from "../../common/Logo/Logo";
import styles from "./styles.module.scss";
import Buttons from "./Buttons/Buttons";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import Burger from "./Burger/Burger";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import { handleLockBodyScroll } from "@/utils/handleLockBodyScroll";
import Container from "@/components/common/Container/Container";

export default function Header(): React.ReactElement {
    const { windowWidth } = useWindowDimensions();
    const [isOpenBurger, setIsOpenBurger] = useState(false);

    function openBurger(): void {
        setIsOpenBurger(true);
        handleLockBodyScroll("lock");
    }

    function closeBurger(): void {
        setIsOpenBurger(false);
        handleLockBodyScroll("unlock");
    }

    return (
        <header>
            <div className={styles.wrapper}>
                <Container>
                    <div className={styles.body}>
                        <Logo
                            isFull={true}
                        />
                        {windowWidth >= 1024 && (
                            <>
                                <Menu />
                                <Buttons screen="big" />
                            </>
                        )}
                        {windowWidth < 1024 && (
                            <Burger
                                isOpenBurger={isOpenBurger}
                                handleClick={() => isOpenBurger ? closeBurger() : openBurger()}
                            />
                        )}
                    </div>
                </Container>
            </div>
            {windowWidth < 1024 && (
                <DropdownMenu
                    isOpenBurger={isOpenBurger}
                    handleClick={() => closeBurger()}
                />
            )}
        </header>
    );
}
