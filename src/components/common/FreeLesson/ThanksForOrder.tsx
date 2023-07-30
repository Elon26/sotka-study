import styles from "./styles.module.scss";

interface ThanksForOrderProps {
    isFormSended: boolean
}

export default function ThanksForOrder({ isFormSended }: ThanksForOrderProps): React.ReactElement {
    return (
        <div className={`${styles.thanksForOrder} ${isFormSended && styles.visible}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>
            <p>Спасибо!</p>
            <p>Мы скоро тебе позвоним!</p>
        </div>
    );
}
