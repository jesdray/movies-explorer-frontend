import React from "react";

function SearchForm(props) {
    const [value, setValue] = React.useState("")

    function searchMovies(e) {
        e.preventDefault();

        const searchMovie = props.movies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(value.toLowerCase())
        })

        props.setMovies(searchMovie)
    }

    return (
        <div className="search">
            <form className="search__form" onSubmit={searchMovies}>
                <div className="search__box">
                    <input className="search__input" placeholder="Поиск" onChange={(e) => setValue(e.target.value)} required/>
                    <button type="submit" className="search__search-button">Поиск</button>
                </div>
                <div className="search__container">
                    <input className="search__checkbox" type="checkbox" id="short-film" name="short film" value="true"></input>
                    <label htmlFor="short-film"><div className="search__circle"/></label>
                    <p className="search__checkbox-name">Короткометражки</p>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;