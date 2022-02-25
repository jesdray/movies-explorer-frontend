import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {

    return(
        <div className="error">
            <h1 className="error__title">404</h1>
            <p className="error__text">Страница не найдена</p>
            <Link className="error__link" to="/">Назад</Link>
        </div>
    );
}

export default NotFound;