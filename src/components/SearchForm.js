import React from "react";

function SearchForm(props) {

    return (
        <div className="search">
            <form className="search__form">
                <div className="search__box">
                    <input className="search__input" placeholder="Поиск" required/>
                    <button className="search__search-button">Поиск</button>
                </div>
                <div className="search__container">
                    <input className="search__checkbox" type="checkbox" id="short-film" name="short film" value="true"></input>
                    <label for="short-film"><div className="search__circle"/></label>
                    <p className="search__checkbox-name">Короткометражки</p>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;