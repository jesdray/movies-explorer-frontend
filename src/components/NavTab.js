import React from "react";
import { Link } from "react-router-dom";

function NavTab(props) {

    return (
        <div className="navtab__overlay">
            <menu className="navtab">
                <button className="navtab__button"></button>
                <Link className="navtab__link" to="/">Главная</Link>
                <Link className="navtab__link navtab__link_active" to="/movies">Фильмы</Link>
                <Link className="navtab__link" to="/saved-movies">Сохранённые фильмы</Link>
                <div className="navtab__box">
                    <Link className="navtab__link" to="/profile">Аккаунт</Link>
                    <Link className="header__button header__button_profile" to="/profile"></Link>
                </div>
            </menu>
        </div>
    );
}

export default NavTab;