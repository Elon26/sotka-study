import { useState } from "react";
import styles from "./styles.module.scss";
import { BsXLg } from "react-icons/bs";
import { send } from "emailjs-com";
import validator from "@/utils/validator";
import { defaultCallMeBackFormData, defaultCallMeBackFormErrors } from "../../../data/contants.json";
import { ICallMeBackFormObject, ISimpleObject } from "@/data/models";
import InputText from "@/components/form/InputText/InputText";
import InputPhone from "@/components/form/InputPhone/InputPhone";
import Checkbox from "@/components/form/Checkbox/Checkbox";
import ThanksForOrder from "../FreeLesson/ThanksForOrder";

interface LogoProps {
    isOpen: boolean
    title: string
    handleClose(): void
}

export default function Popup({ isOpen, title, handleClose }: LogoProps): React.ReactElement {
    const [data, setData] = useState<ICallMeBackFormObject>(defaultCallMeBackFormData);
    const [errors, setErrors] = useState<ISimpleObject>(defaultCallMeBackFormErrors);
    const [isFormSended, setIsFormSended] = useState<boolean>(false);

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Укажите имя"
            }
        },
        phone: {
            isRequired: {
                message: "Укажите номер телефона"
            },
            isPhone: {
                message: "Введите полностью"
            }
        },
        popd: {
            isRequired: {
                message: "Необходимо согласие"
            }
        }
    };

    const validate = (dataForSend: ISimpleObject) => {
        const errors = validator(dataForSend, validatorConfig);
        setErrors(errors);
        return !Object.keys(errors).length;
    };

    function setNewValue(name: string, value: string | boolean): void {
        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));

        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const dataForSend = {
            name: data.name,
            phone: data.phone,
            popd: data.popd ? "Согласен" : ""
        };

        const isValid = validate(dataForSend);
        if (isValid) {
            try {
                setIsFormSended(true);
                await send(
                    "service_m68vxd2",
                    "template_kb6q9o1",
                    dataForSend,
                    "ppnjbRyoHEJrTv6iq"
                );
            } catch (error) {
                setIsFormSended(false);
                console.log("Отправка не удалась");
            }
        }
    };

    return (
        <div className={`${styles.wrapper} ${isOpen && styles.open}`}>
            <div className={styles.body}>
                <div className={styles.close} onClick={handleClose}><BsXLg /></div>
                <div className={styles.title}>{title}</div>
                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <InputText
                        styles={styles}
                        name="name"
                        placeholder="введите имя"
                        value={data.name}
                        setNewValue={setNewValue}
                        error={errors.name}
                    />
                    <InputPhone
                        styles={styles}
                        name="phone"
                        placeholder="номер телефон"
                        value={data.phone}
                        setNewValue={setNewValue}
                        error={errors.phone}
                    />
                    <button
                        className={styles.submitButton}
                    >
                        Отправить
                    </button>
                    <Checkbox
                        styles={styles}
                        name="popd"
                        id="callBackPopd"
                        value={data.popd}
                        setNewValue={setNewValue}
                        error={errors.popd}
                    />
                    <ThanksForOrder
                        styles={styles}
                        isFormSended={isFormSended}
                        you="вам"
                    />
                </form>
            </div>
        </div>
    );
}
