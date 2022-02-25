import React from "react";
import iconLink from "../images/icon_link.svg"

function Portfolio(props) {

    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__links">
                <a href="https://jesdray.github.io/how-to-learn" className="portfolio__link">
                    Статичный сайт
                    <img className="portfolio__icon-link" alt="перейти" src={iconLink} />
                </a>
                <a href="https://jesdray.github.io/russian-travel" className="portfolio__link">
                    Адаптивный сайт
                    <img className="portfolio__icon-link" alt="перейти" src={iconLink} />
                </a>
                <a href="https://front-back-mesto.students.nomoredomains.monster" className="portfolio__link">
                    Одностраничное приложение
                    <img className="portfolio__icon-link" alt="перейти" src={iconLink} />
                </a>
            </div>
        </div>
    );
}

export default Portfolio;