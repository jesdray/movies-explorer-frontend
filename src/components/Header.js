/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import image from "../images/header_image.svg";
import { loggedInContext } from '../contexts/loggedInContext';

function Header(props) {
    const loggedIn = React.useContext(loggedInContext);

    if (loggedIn) {
        return (
            <header className="header">
                <img src={logo} alt="Лого" className="header__logo"></img>
                <div className="header__navTab">
                    <menu className="header__menu">
                        <Link className="header__link header__link_active" to="/movies">Фильмы</Link>
                        <Link className="header__link" to="/saved-movies">Сохранённые фильмы</Link>
                    </menu>
                    <menu className="header__menu">
                        <Link href="#" className="header__link" to="/movies"></Link>
                        <button className="header__button header__button_profile"></button>
                    </menu>
                </div>
            </header>
        );
    }
    return (
        <header className="header header_bg">
            <div className="header__box">
                <img src={logo} alt="Лого" className="header__logo"></img>
                <menu className="header__menu">
                    <Link href="#" className="header__link" to="/signup">Регистрация</Link>
                    <button className="header__button header__button_black" to="/signin">Войти</button>
                </menu>
            </div>
            <div className="header__box header__box_column">
                <div className="header__minibox">
                    <h1 className="header__title">Учебный проект студента факультета Веб-разработки.</h1>
                </div>
                <div className="header__minibox">
                    <img className="header__img" src={image} alt="Изображение"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;