import { ISimpleObject, IValidateSettings } from "@/data/models";

const validator = (dataEx: ISimpleObject, config: IValidateSettings) => {
    const errors: ISimpleObject = {};

    function validate(
        validateMethod: string,
        data: string,
        config: ISimpleObject
    ) {
        let statusValidate;

        if (validateMethod === "isRequired") {
            statusValidate = data.trim() === "";
        }
        if (validateMethod === "isPhone") {
            statusValidate = data.length !== 18;
        }
        if (statusValidate) return config.message;
    }

    for (const fieldName in dataEx) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                dataEx[fieldName],
                config[fieldName][validateMethod]
            );

            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }

    return errors;
};

export default validator;
