import styles from "./styles.module.scss";
import Container from "@/components/common/Container/Container";
import MainInfo from "./MainInfo";
import ExtraLinks from "./ExtraLinks";

export default function Footer(): React.ReactElement {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <>
                    <MainInfo />
                    <ExtraLinks />
                </>
            </Container>
        </footer>
    );
}

