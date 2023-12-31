import { ISimpleObject } from "@/data/models";
import { useClickCatcher } from "@/hooks/useClickCatcher";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface SelectProps {
    styles: ISimpleObject
    name: string
    value: string
    error: string
    values: string[]
    setNewValue(name: string, value: string): void
}

export default function Select({ styles, name, value, error, values, setNewValue }: SelectProps): React.ReactElement {
    const { elemInFocus } = useClickCatcher();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function handleClick(e: React.MouseEvent<HTMLElement>): void {
        setIsDropdownOpen(prev => !prev);

        const target = e.target as HTMLElement;
        const dropdownItem = target.closest(`.${styles.dropdownItem}`);
        const dropdownItemValue = dropdownItem && dropdownItem.textContent;

        if (dropdownItemValue) setNewValue(name, dropdownItemValue);
    }

    useEffect(() => {
        const selectItem = elemInFocus && elemInFocus.closest(`.${styles.selectItem}`);
        if (!selectItem) setIsDropdownOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elemInFocus]);

    return (
        <div
            className={`
            ${styles.formItem} 
            ${isDropdownOpen && styles.withDropdown} 
            ${styles.selectItem}
            ${error && styles.error} 
            `}
            onClick={handleClick}
        >
            <div className={styles.basicArea}>
                {!value && <div className={styles.placeholder}>выберите класс</div>}
                {value && <div className={styles.selectedValue}>{value}</div>}
                <BsChevronDown className={`${styles.icon} ${isDropdownOpen && styles.reversed}`} />
            </div>
            <div className={`${styles.dropdownArea} ${isDropdownOpen && styles.visible}`}>
                {values.map(value => (
                    <div
                        className={styles.dropdownItem}
                        key={"SelectItemDropdown" + value + Date.now()}
                    >
                        {value}
                    </div>
                ))}
            </div>
            {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
    );
}
