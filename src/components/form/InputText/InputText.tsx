import { ISimpleObject } from "@/data/models";

interface InputTextProps {
    styles: ISimpleObject
    value: string
    name: string
    setNewValue(name: string, value: string): void
    placeholder: string
}

export default function InputText({ styles, name, value, setNewValue, placeholder }: InputTextProps): React.ReactElement {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setNewValue(name, e.target.value);
    }

    return (
        <div className={styles.formItem}>
            <input
                type="text"
                name={name}
                className={styles.inputItem}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                autoComplete="off"
            />
        </div>
    );
}
