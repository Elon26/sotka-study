import Link from "next/link";
import styles from "./styles.module.scss";
import { githubHomePageUrl } from "../../../data/contants.json";

export default function ExtraLinks(): React.ReactElement {
    return (
        <div className={styles.bottom}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 50 40" fill="none"><path d="M13.1333 30.018C12.2845 30.018 11.1735 29.2737 10.2035 27.2797C9.27304 25.3672 8.66382 22.6408 8.66382 19.5641C8.66382 16.4874 9.27304 13.761 10.2035 11.8485C11.1735 9.85449 12.2845 9.11016 13.1333 9.11016C13.9822 9.11016 15.0931 9.85449 16.0632 11.8485C16.9936 13.761 17.6028 16.4874 17.6028 19.5641C17.6028 22.6408 16.9936 25.3672 16.0632 27.2797C15.0931 29.2737 13.9822 30.018 13.1333 30.018Z" stroke="currentColor" strokeWidth="2.4"></path><path d="M42.8001 19.5635C42.8001 23.7812 41.5915 27.5486 39.6986 30.2302C37.8036 32.9148 35.2978 34.4271 32.6611 34.4271C30.0245 34.4271 27.5187 32.9148 25.6236 30.2302C23.7308 27.5486 22.5221 23.7812 22.5221 19.5635C22.5221 15.3459 23.7308 11.5785 25.6236 8.89692C27.5187 6.21225 30.0245 4.7 32.6611 4.7C35.2978 4.7 37.8036 6.21225 39.6986 8.89692C41.5915 11.5785 42.8001 15.3459 42.8001 19.5635Z" stroke="currentColor" strokeWidth="2.4"></path><path d="M4 26.1768L4 12.9492" stroke="currentColor" strokeWidth="2.4"></path></svg>
            <Link href={githubHomePageUrl + "docs/oferta.pdf"}>пользовательское соглашение</Link>
            <Link href={githubHomePageUrl + "docs/popd.pdf"}>политика обработки персональных данных</Link>
            <span>огрн: 1191690096047</span>
            <span>инн: 1660338214</span>
        </div>
    );
}

