import styles from "./styles.module.scss";

interface ContainerProps {
    children: React.ReactElement
}

export default function Container({ children }: ContainerProps): React.ReactElement {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
