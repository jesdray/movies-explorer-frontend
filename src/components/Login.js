import React from "react";
import { Link } from "react-router-dom";

function Login() {

    return (
        <div className="login">
            <form className="form">
                <div className="form__box">
                    <Link className="logo logo__form" to="/"></Link>
                    <h1 className="form__title">Добро пожаловать!</h1>
                    <p className="form__input-name">Имя</p>
                    <input className="form__input"></input>
                    <span className="form__span"></span>
                    <p className="form__input-name">E-mail</p>
                    <input className="form__input"></input>
                    <span className="form__span"></span>
                    <p className="form__input-name">Пароль</p>
                    <input className="form__input"></input>
                    <span className="form__span"></span>
                </div>
                <div className="form__box">
                    <button className="form__button">Зарегистрироваться</button>
                    <Link className="form__link" to="/signin">Уже зарегистрированы?<span className="form__span_link">Войти</span></Link>
                </div>
            </form>
        </div>
    );
}

export default Login;