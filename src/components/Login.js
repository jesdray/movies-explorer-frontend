import React from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "./FormValidator"

function Login(props) {
    const email = useFormWithValidation("", { isEmpty: true, isEmail: true })
    const password = useFormWithValidation("", { isEmpty: true, minLength: 4 })
    const formValid = email.isValid && password.isValid;

    function handleSubmit(e) {
        e.preventDefault();

        if (email.isValid && password.isValid) {
            props.setPreloaderActive(true);
            props.onLogin(email.value, password.value);
        }
    }

    return (
        <div className="register">
            <form className="form" onSubmit={handleSubmit} noValidate={true}>
                <div className="form__box">
                    <Link className="logo logo__form" to="/"></Link>
                    <h1 className="form__title">Рады видеть!</h1>
                    <p className="form__input-name">E-mail</p>
                    <input type="text" className="form__input" required name="email" value={email.value} onChange={(e) => email.onChange(e)} onFocus={(e) => email.onBlur(e)} ></input>
                    <span className="form__span">{email.errorMessage}</span>
                    <p className="form__input-name">Пароль</p>
                    <input type="password" className="form__input" required name="password" value={password.value} onChange={(e) => password.onChange(e)} onFocus={(e) => password.onBlur(e)} ></input>
                    <span className="form__span">{password.errorMessage}</span>
                </div>
                <props.Preloader />
                <div className="form__box">
                    <button type="submit" className={formValid ? "form__button" : "form__button form__button_disabled"}
                        disabled={formValid ? false : true}  >
                        Войти
                    </button>
                    <Link className="form__link" to="/signup">Ещё не зарегистрированы?<span className="form__span_link">Регистрация</span></Link>
                </div>
            </form>
        </div>
    );

}

export default Login;