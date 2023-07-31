import { ISimpleObject } from "@/data/models";
import Link from "next/link";
import { githubHomePageUrl } from "../../../data/contants.json";

interface InputTextProps {
    styles: ISimpleObject
    value: boolean
    error: string
    name: string
    id: string
    setNewValue(name: string, value: string | boolean): void
}

export default function Checkbox({ styles, name, id, error, value, setNewValue }: InputTextProps): React.ReactElement {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setNewValue(name, e.target.checked);
    }

    return (
        <div className={styles.checkboxArea}>
            <input
                type="checkbox"
                name={name}
                id={id}
                className={styles.checkboxItem}
                onChange={handleChange}
                checked={value}
            />
            <label
                className={`
                    ${styles.checkboxLabel} 
                    ${value && styles.checked}
                    ${error && styles.checkboxError}
                `}
                htmlFor={id}
            >
                <span>Согласен с </span>
                <Link
                    href={githubHomePageUrl + "docs/popd.pdf"}
                    className={styles.popdLink}
                    target="_blank"
                >
                    политикой обработки персональных данных*
                </Link>
            </label>
        </div>
    );
}
