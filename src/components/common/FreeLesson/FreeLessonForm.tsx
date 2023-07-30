import styles from "./styles.module.scss";
import { useState } from "react";
import { defaultFreeLessonFormData, defaultFreeLessonFormErrors, gradesOfSchool } from "../../../data/contants.json";
import Select from "@/components/form/Select/Select";
import InputText from "@/components/form/InputText/InputText";
import InputPhone from "@/components/form/InputPhone/InputPhone";
import Checkbox from "@/components/form/Checkbox/Checkbox";
import { IFreeLessonFormObject, ISimpleObject } from "@/data/models";
import validator from "@/utils/validator";
import ThanksForOrder from "./ThanksForOrder";
import { send } from "emailjs-com";

export default function FreeLessonForm(): React.ReactElement {
    const [data, setData] = useState<IFreeLessonFormObject>(defaultFreeLessonFormData);
    const [errors, setErrors] = useState<ISimpleObject>(defaultFreeLessonFormErrors);
    const [isFormSended, setIsFormSended] = useState<boolean>(false);

    const validatorConfig = {
        grade: {
            isRequired: {
                message: "Укажите класс"
            }
        },
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
            grade: data.grade,
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
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <Select
                styles={styles}
                name="grade"
                value={data.grade}
                values={gradesOfSchool}
                setNewValue={setNewValue}
                error={errors.grade}
            />
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
                Записаться
            </button>
            <Checkbox
                styles={styles}
                name="popd"
                value={data.popd}
                setNewValue={setNewValue}
                error={errors.popd}
            />
            <ThanksForOrder isFormSended={isFormSended} />
        </form>
    );
}
