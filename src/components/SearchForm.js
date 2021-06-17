import React from "react";

function SearchForm(props) {
    const [shortFilms, setShortFilms] = React.useState(true);
    const [checkboxActive, setCheckboxActive] = React.useState(false);
    const [checkboxClass, setCheckboxClass] = React.useState("search__button-checkbox");

    function checkbox() {
        setCheckboxActive(!checkboxActive);

        if (checkboxActive) {
            setCheckboxClass("search__button-checkbox search__button-checkbox_active");
        }
        setCheckboxClass("search__button-checkbox");
    }

    return (
        <div className="search">
            <form className="search__form">
                <div className="search__box">
                    <input className="search__input" placeholder="Поиск" />
                    <button className="search__search-button">Поиск</button>
                </div>
                <div className="search__container">
                    <button className={checkboxActive} onClick="checkbox">
                        <div className="search__circle" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;