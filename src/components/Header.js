import React from "react";
import { Link, useHistory } from "react-router-dom";
import { LoggedInContext } from "../contexts/loggedInContext"

function Header(props) {
    const loggedIn = React.useContext(LoggedInContext)
    const path = useHistory();

    if (loggedIn) {
        if (props.sizeWindow < 769) {
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
                            <Link className={path.location.pathname === "/" ? `header__link` : `header__link header__link_black ${path.location.pathname === "/movies" && "header__link_active"}`} to="/movies">Фильмы</Link>
                            <Link className={path.location.pathname === "/" ? `header__link` : `header__link header__link_black ${path.location.pathname === "/saved-movies" && "header__link_active"}`} to="/saved-movies">Сохранённые фильмы</Link>
                        </menu>
                        <menu className="header__menu">
                            <Link className={path.location.pathname === "/" ? `header__link` : `header__link header__link_black ${path.location.pathname === "/profile" && "header__link_active"}`} to="/profile">Аккаунт</Link>
                            <Link className="header__button header__button_profile" to="/profile"></Link>
                        </menu>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className={path.location.pathname === "/" ? "header header_bg" : "header"}>
                <div className="header__box">
                    <Link className="logo" to="/"></Link>
                    <menu className="header__menu">
                        <Link className={path.location.pathname === "/" ? `header__link` : `header__link header__link_black`} to="/signup">Регистрация</Link>
                        <Link className="header__button header__button_black" to="/signin">Войти</Link>
                    </menu>
                </div>
            </header>
        );
    }
}

export default Header;