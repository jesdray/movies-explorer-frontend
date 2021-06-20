import React from "react";
import { Link } from "react-router-dom";

function Register() {

    return (
        <div className="register">
            <form className="form">
                <Link className="logo" to="/"></Link>
                <h1 className="form__title">Рады видеть!</h1>
                <p className="form__input-name">E-mail</p>
                <input className="form__input"></input>
                <span className="form__span"></span>
                <p className="form__input-name">Пароль</p>
                <input className="form__input"></input>
                <span className="form__span"></span>
                <button className="form__button">Войти</button>
                <Link className="form__link" to="/signup">Ещё не зарегистрированы?<span className="form__span_link">Регистрация</span></Link>
            </form>
        </div>
    );
}

export default Register;