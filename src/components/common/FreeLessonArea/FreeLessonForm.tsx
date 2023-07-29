import styles from "./styles.module.scss";
import { useState } from "react";
import { defaultFreeLessonFormData, gradesOfSchool } from "../../../data/contants.json";
import Select from "@/components/form/Select/Select";
import InputText from "@/components/form/InputText/InputText";
import InputPhone from "@/components/form/InputPhone/InputPhone";
import Checkbox from "@/components/form/Checkbox/Checkbox";
import { IFreeLessonFormObject } from "@/data/models";

export default function FreeLessonForm(): React.ReactElement {
    const [data, setData] = useState<IFreeLessonFormObject>(defaultFreeLessonFormData);

    function setNewValue(name: string, value: string | boolean): void {
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const isValid = true;
        if (isValid) {
            console.log("Данные отправлены", data);

            // send(
            //     "service_qb74c3z",
            //     "template_pvg5gbg",
            //     data,
            //     "omHUDjCn2WjDLmNlN"
            // )
            //     .then((response) => {
            //         console.log("SUCCESS!", response.status, response.text);
            //     })
            //     .catch((err) => {
            //         console.log("FAILED...", err);
            //     });

            // setData(defaultFreeLessonFormData);
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
            />
            <InputText
                styles={styles}
                name="name"
                placeholder="введите имя"
                value={data.name}
                setNewValue={setNewValue}
            />
            <InputPhone
                styles={styles}
                name="phone"
                placeholder="номер телефон"
                value={data.phone}
                setNewValue={setNewValue}
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
            />
        </form>
    );
}
