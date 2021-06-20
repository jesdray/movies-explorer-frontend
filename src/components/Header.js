/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useHistory } from "react-router-dom";

function Header(props) {
    const path = useHistory()

    if (useHistory().location.pathname !== "/") {
        return (
            <header className="header">
                <div className="header__box">
                    <Link className="header__logo" to="/"></Link>
                    <div className="header__navTab">
                        <menu className="header__menu">
                            <Link className="header__link header__link_black header__link_active" to="/movies">Фильмы</Link>
                            <Link className="header__link header__link_black" to="/saved-movies">Сохранённые фильмы</Link>
                        </menu>
                        <menu className="header__menu">
                            <Link href="#" className="header__link header__link_black" to="/movies">Аккаунт</Link>
                            <button className="header__button header__button_profile"></button>
                        </menu>
                    </div>
                </div>
            </header>
        );
    }
    return (
        <header className="header header_bg">
            <div className="header__box">
                <Link className="logo" to="/"></Link>
                <menu className="header__menu">
                    <Link href="#" className="header__link" to="/signup">Регистрация</Link>
                    <button className="header__button header__button_black" to="/signin">Войти</button>
                </menu>
            </div>
        </header>
    );
}

export default Header;