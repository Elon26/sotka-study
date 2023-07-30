import { ISimpleObject } from "@/data/models";
import React, { useState } from "react";

interface InputPhoneProps {
    styles: ISimpleObject
    value: string
    name: string
    error: string
    setNewValue(name: string, value: string): void
    placeholder: string
}

export default function InputPhone({
    name,
    value,
    error,
    setNewValue,
    placeholder,
    styles
}: InputPhoneProps) {
    const [oldValue, setOldValue] = useState(value);

    const handleChangePhoneHandler = (value: string): void => {
        setNewValue(name, value);
    };

    const handleFocus = (): void => {
        if (value.length <= 4) handleChangePhoneHandler("+7 (");
    };

    const handleBlur = (): void => {
        if (value.length <= 4) handleChangePhoneHandler("");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = e.target.value;

        if (newValue.length > oldValue.length) {
            const numbers = getNumbers(newValue);
            const convertedNumbers = convertNumbers(numbers);
            handleChangePhoneHandler(convertedNumbers);
            setOldValue(convertedNumbers);
        } else {
            if (oldValue.length - newValue.length === 1 && oldValue.slice(-1) === "-") {
                handleChangePhoneHandler(newValue.slice(0, -1));
                setOldValue(newValue.slice(0, -1));
            } else {
                if (oldValue.length - newValue.length === 1 && oldValue.slice(-1) === " ") {
                    handleChangePhoneHandler(newValue.slice(0, -2));
                    setOldValue(newValue.slice(0, -2));
                } else {
                    const numbers = getNumbers(newValue);
                    const convertedNumbers = convertNumbers(numbers);
                    handleChangePhoneHandler(convertedNumbers);
                    setOldValue(convertedNumbers);
                }
            }
        }
    };

    const getNumbers = (value: string): string => {
        const unclearedNumbers = value.slice(4).split("");

        const cleardArr: string[] = [];
        unclearedNumbers.forEach(item => {
            if (isFinite(+item) && item !== " ") {
                cleardArr.push(item.toString());
            }
        });

        return cleardArr.join("");
    };

    const convertNumbers = (value: string): string => {
        let result = "+7 (";
        for (let i = 0; i < value.length; i++) {
            const char = value[i];
            result += char;
            if (i === 2) {
                result += ") ";
            }
            if (i === 5 || i === 7) {
                result += "-";
            }
            if (i === 9) break;
        }
        return result;
    };

    return (
        <div className={`
            ${styles.formItem} 
            ${error && styles.error} 
        `}>
            <input
                className={styles.inputItem}
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                autoComplete="off"
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder}
            />
            {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
    );
};
