import styles from "./styles.module.scss";

interface WhiteSpaceProps {
    children: React.ReactElement
}

export default function PageArea({ children }: WhiteSpaceProps): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                {children}
            </div>
        </div>
    );
}
