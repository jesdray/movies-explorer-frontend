import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {

    return (
        <div className={props.open ? "navigation__overlay navigation_open" : "navigation__overlay"}>
            <menu className="navigation">
                <button className="navigation__button" onClick={props.closeNavTab}></button>
                <Link className="navigation__link" to="/">Главная</Link>
                <Link className="navigation__link navigation__link_active" to="/movies">Фильмы</Link>
                <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
                <div className="navigation__box">
                    <Link className="navigation__link" to="/profile">Аккаунт</Link>
                    <Link className="header__button header__button_profile" to="/profile"></Link>
                </div>
            </menu>
        </div>
    );
}

export default Navigation;