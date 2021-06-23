import React from "react";
import { Link, useHistory } from "react-router-dom";

function Header(props) {
    const path = useHistory()

    if (useHistory().location.pathname === "/") {
        return (
            <header className={path.location.pathname === "/" ? "header header_bg" : "header"}>
                <div className="header__box">
                    <Link className="logo" to="/"></Link>
                    <menu className="header__menu">
                        <Link className="header__link" to="/signup">Регистрация</Link>
                        <Link className="header__button header__button_black" to="/signin">Войти</Link>
                    </menu>
                </div>
            </header>
        );
    }
    if (window.innerWidth < 769) {
        return (
            <header className={path.location.pathname === "/" ? "header header_bg" : "header"}>
                <div className="header__box">
                    <Link className="logo" to="/"></Link>
                    <menu className="header__menu">
                        <button className="header__menu-button" onClick={props.openNavTab}>
                            <div className="header__rectangle" />
                            <div className="header__rectangle" />
                            <div className="header__rectangle" />
                        </button>
                    </menu>
                </div>
            </header>
        );
    }
    return (
        <header className={path.location.pathname === "/" ? "header header_bg" : "header"}>
            <div className="header__box">
                <Link className="logo" to="/"></Link>
                <div className="header__navTab">
                    <menu className="header__menu">
                        <Link className="header__link header__link_black header__link_active" to="/movies">Фильмы</Link>
                        <Link className="header__link header__link_black" to="/saved-movies">Сохранённые фильмы</Link>
                    </menu>
                    <menu className="header__menu">
                        <Link className="header__link header__link_black header__link_active" to="/profile">Аккаунт</Link>
                        <Link className="header__button header__button_profile" to="/profile"></Link>
                    </menu>
                </div>
            </div>
        </header>
    );
}

export default Header;