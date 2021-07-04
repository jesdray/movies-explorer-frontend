import React, { useEffect } from "react";
import { flushSync } from "react-dom";

// (email.isDirty && email.isEmpty) && "Поле не может быть пустым"

export function useFormWithValidation(initialValue, validations) {
    const [value, setValue] = React.useState(initialValue);
    const [isDirty, setIsDirty] = React.useState(false)
    const [isEmpty, setIsEmpty] = React.useState(false)
    const [minLength, setMinLength] = React.useState(false)
    const [isEmail, setIsEmail] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState("")
    const [isValid, setIsValid] = React.useState(false);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setIsDirty(true)
    }

    const check = React.useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length < validations[validation] ? setMinLength(true) : setMinLength(false)
                    minLength ? setErrorMessage(`Минимальное количество символов: ${validations[validation] + 1}`) : setErrorMessage("")
                    break;
                case "isEmpty":
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    isEmpty ? setErrorMessage("Поле не может быть пустым") : setErrorMessage("")
                    break;
                case "isEmail":
                    const test = re.test(String(value).toLowerCase())
                    test ? setIsEmail(false) : setIsEmail(true)
                    isEmail ? setErrorMessage("Введите email") : setErrorMessage("")
                    break;
            }
        }
    }, [value])

    React.useEffect(() => {
        if (isDirty || isEmail || isEmpty || minLength) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }

    }, [isDirty, isEmail, isEmpty, minLength, errorMessage])

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        isEmpty,
        minLength,
        errorMessage,
        isValid,
        isEmail,
        ...check
    }
}