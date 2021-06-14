/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { loggedInContext } from '../contexts/loggedInContext'

function Header(props) {
    const loggedIn = React.useContext(loggedInContext);

    if (loggedIn) {
        return (
            <header className="header">
                <button className="header__logo" to="/"></button>
                <div className="header__navTab">
                    <menu className="header__menu">
                        <Link className="header__link header__link_active" to="/movies">Фильмы</Link>
                        <Link className="header__link" to="/saved-movies">Сохранённые фильмы</Link>
                    </menu>
                    <menu className="header__menu">
                        <Link href="#" className="header__link" to="/movies"></Link>
                        <button className="header__button"></button>
                    </menu>
                </div>
            </header>
        );
    }
    return (
        <header className="header header_bg">
            <button className="header__logo header_bg" to="/"></button>
            <div className="header__navTab">
                <menu className="header__menu">
                    <Link href="#" className="header__link" to="/movies"></Link>
                    <button className="header__button"></button>
                </menu>
            </div>
        </header>
    );
}

export default Header;