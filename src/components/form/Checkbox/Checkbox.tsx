import { ISimpleObject } from "@/data/models";
import Link from "next/link";
import { githubHomePageUrl } from "../../../data/contants.json";

interface InputTextProps {
    styles: ISimpleObject
    value: boolean
    name: string
    setNewValue(name: string, value: string | boolean): void
}

export default function Checkbox({ styles, name, value, setNewValue }: InputTextProps): React.ReactElement {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setNewValue(name, e.target.checked);
    }

    return (
        <div>
            <input
                type="checkbox"
                name={name}
                id={name}
                className={styles.checkboxItem}
                onChange={handleChange}
                checked={value}
            />
            <label
                className={`${styles.checkboxLabel} ${value && styles.checked}`}
                htmlFor={name}
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
