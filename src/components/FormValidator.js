/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { flushSync } from "react-dom";

// (email.isDirty && email.isEmpty) && "Поле не может быть пустым"

export function useFormWithValidation(inputValue, validations) {
    const [value, setValue] = React.useState(inputValue);
    const initialValue = inputValue
    const [isDirty, setIsDirty] = React.useState(false)
    const [isEmpty, setIsEmpty] = React.useState(true)
    const [minLength, setMinLength] = React.useState(true)
    const [isEmail, setIsEmail] = React.useState(true)
    const [isChanged, setIsChanged] = React.useState(true);
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
                    value.length < validations[validation] ? setMinLength(false) : setMinLength(true)
                    if (value !== "" && !minLength) { setErrorMessage(`Минимальное количество символов: ${validations[validation]}`) }
                    break;
                case "isEmpty":
                    value === "" ? setIsEmpty(false) : setIsEmpty(true)
                    if (value === "" && isDirty) { setErrorMessage("Поле не может быть пустым") }
                    break;
                case "isEmail":
                    re.test(String(value).toLowerCase()) ? setIsEmail(true) : setIsEmail(false)
                    if (value !== "" && !isEmail) { setErrorMessage("Введите email") }
                    break;
                case "isChanged":
                    value === initialValue ? setIsChanged(false) : setIsChanged(true)
                    if (value === initialValue) { setErrorMessage("Значение поля должно быть измененно") }
                    break;
            }
        }
    }, [value])

    React.useEffect(() => {
        if (isEmail && isEmpty && minLength && value !== "") {
            setIsValid(true)
            if (isEmail && isEmpty && minLength && isChanged && value !== "") {
                setErrorMessage("")
            }
        } else (
            setIsValid(false)
        )

    }, [isEmail, isEmpty, minLength, isChanged])

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
        isChanged,
        ...check
    }
}