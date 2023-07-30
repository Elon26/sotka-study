import { ISimpleObject } from "@/data/models";

interface InputTextProps {
    styles: ISimpleObject
    value: string
    name: string
    error: string
    setNewValue(name: string, value: string): void
    placeholder: string
}

export default function InputText({ styles, name, error, value, setNewValue, placeholder }: InputTextProps): React.ReactElement {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setNewValue(name, e.target.value);
    }

    return (
        <div className={`
            ${styles.formItem} 
            ${error && styles.error} 
        `}>
            <input
                type="text"
                name={name}
                className={styles.inputItem}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                autoComplete="off"
            />
            {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
    );
}
