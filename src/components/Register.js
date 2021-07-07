import React from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "./FormValidator";

function Register(props) {
    const name = useFormWithValidation("", { isEmpty: true, minLength: 2 })
    const email = useFormWithValidation("", { isEmpty: true, isEmail: true })
    const password = useFormWithValidation("", { isEmpty: true, minLength: 4 })
    const formValid = name.isValid && email.isValid && password.isValid;

    function handleSubmit(e) {
        e.preventDefault();

        if (name.isValid && email.isValid && password.isValid) {
            props.setPreloaderActive(true);
            props.onRegister(name.value, email.value, password.value);
        }
    }

    return (
        <div className="login">
            <form className="form" onSubmit={handleSubmit} noValidate={true}>
                <div className="form__box">
                    <Link className="logo logo__form" to="/"></Link>
                    <h1 className="form__title">Добро пожаловать!</h1>
                    <p className="form__input-name">Имя</p>
                    <input type="text" className="form__input" required value={name.value} name="name" onBlur={e => name.onBlur(e)} onChange={e => name.onChange(e)}></input>
                    <span className="form__span">{name.errorMessage}</span>
                    <p className="form__input-name">E-mail</p>
                    <input type="text" className="form__input" required value={email.value} name="email" onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)}></input>
                    <span className="form__span">{email.errorMessage}</span>
                    <p className="form__input-name">Пароль</p>
                    <input type="password" className="form__input" required value={password.value} name="password" onBlur={e => password.onBlur(e)} onChange={e => password.onChange(e)}></input>
                    <span className="form__span">{password.errorMessage}</span>
                </div>
                <props.Preloader />
                <div className="form__box">
                    <button type="submit" className={formValid ? "form__button" : "form__button form__button_disabled"}
                        disabled={formValid} >
                        Зарегистрироваться
                    </button>
                    <Link className="form__link" to="/signin">Уже зарегистрированы?<span className="form__span_link">Войти</span></Link>
                </div>
            </form>
        </div>
    );
}

export default Register;