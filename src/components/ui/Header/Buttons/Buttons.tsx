import LinkButton from "@/components/common/LinkButton/LinkButton";
import styles from "./styles.module.scss";

interface ButtonsProps {
    screen: | "small" | "big"
}

export default function Buttons({ screen }: ButtonsProps): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            {screen === "big" && (<>
                {/* <LinkButton
                    text="Войти"
                    link="/login"
                    size="mini"
                    color="transparent"
                    border="none"
                    withIcon={true}
                /> */}
                <LinkButton
                    text="Вводный урок"
                    link="/#form"
                    size="small"
                    color="blue"
                    border="none"
                />
            </>)
            }
            {screen === "small" && (<>
                {/* <LinkButton
                    text="Войти на платформу"
                    link="/login"
                    size="big"
                    color="transparent"
                    border="white"
                    withIcon={true}
                /> */}
                <LinkButton
                    text="Вводный урок"
                    link="/#form"
                    size="big"
                    color="blue"
                    border="none"
                />
            </>)
            }
        </div>
    );
}
