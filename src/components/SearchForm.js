import React from "react";

function SearchForm(props) {
    const movies = props.movies
    const [value, setValue] = React.useState("")
    const [check, setCheck] = React.useState(false)


    // фильтрует короткометражки
    function searchShortMovies() {
        props.setPreloaderActive(true)
        if (!check) {
            console.log(movies);
            let searchMovie = props.movies.filter((movie) => {
                return movie.duration <= 40;
            })

            props.setMovies(searchMovie)
            props.setPreloaderActive(false)
        } else {
            props.setMovies(props.allMovies)
            props.setPreloaderActive(false)
        }

        setCheck(!check)
    }

    // Ищит по символам
    function searchMovies(e) {
        e.preventDefault();

        props.setPreloaderActive(true)
        if (value !== "") {
            const searchMovie = props.movies.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(value.toLowerCase())
            })

            props.setMovies(searchMovie)
            props.setPreloaderActive(false)
        } else {
            check === false && props.setMovies(props.allMovies)
            props.setPreloaderActive(false)
        }
    }

    return (
        <div className="search">
            <form className="search__form" onSubmit={searchMovies} noValidate={true}>
                <div className="search__box">
                    <input className="search__input" placeholder="Поиск" required onChange={(e) => setValue(e.target.value)} />
                    <button type="submit" className="search__search-button">Поиск</button>
                </div>
                <div className="search__container">
                    <input className="search__checkbox" type="checkbox" id="short-film" name="short film" value="true" checked={check} onChange={searchShortMovies} />
                    <label for="short-film" ><div className="search__circle" /></label>
                    <p className="search__checkbox-name">Короткометражки</p>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;