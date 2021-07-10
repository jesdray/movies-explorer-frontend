import React from "react";

function SearchForm(props) {
    const active = props.savedMovies ? localStorage.getItem('saveShortMovies') : localStorage.getItem('shortMovies')
    const [value, setValue] = React.useState("")
    const [check, setCheck] = React.useState(active === "true" ? true : false)
    const allMovie = JSON.parse(localStorage.getItem('movies'))
    const AllSaveMovie = JSON.parse(localStorage.getItem('saveMovies'))

    // Ищет по символам
    function searchMovies(e) {
        e.preventDefault();
        let searchMovie;
        let movies = props.allMovies

        props.setPreloaderActive(true);

        if (value !== "") {
            searchMovie = movies.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(value.toLowerCase());
            })

            if (check) {
                searchMovie = searchMovie.filter((movie) => {
                    return movie.duration <= 40;
                })
                console.log(searchMovie);

                if (props.savedMovies) {
                    localStorage.setItem('saveShortMovies', true);
                } else {
                    localStorage.setItem('shortMovies', true);
                }
            }

            props.setMovies(searchMovie);
            if (searchMovie.length === 0) {
                props.setSearchResult(true);
                if (props.savedMovies) {
                    localStorage.setItem('saveShortMovies', false);
                    localStorage.setItem('saveSearchMovies', JSON.stringify(searchMovie));
                } else {
                    localStorage.setItem('shortMovies', false);
                    localStorage.setItem('searchMovies', JSON.stringify(searchMovie));
                }
                props.setPreloaderActive(false);
                return
            } else {
                props.setSearchResult(false)
                if (props.savedMovies) {
                    localStorage.setItem('saveShortMovies', check);
                    localStorage.setItem('saveSearchMovies', JSON.stringify(searchMovie));
                } else {
                    localStorage.setItem('shortMovies', check);
                    localStorage.setItem('searchMovies', JSON.stringify(searchMovie));
                }
                props.setPreloaderActive(false);
                return
            }
        }

        if (check) {
            searchMovie = movies.filter((movie) => {
                return movie.duration <= 40;
            })

            props.setMovies(searchMovie);
            if (props.savedMovies) {
                localStorage.setItem('saveShortMovies', true);
                localStorage.setItem('saveSearchMovies', JSON.stringify(searchMovie));
            } else {
                localStorage.setItem('shortMovies', true);
                localStorage.setItem('searchMovies', JSON.stringify(searchMovie));
            }
            props.setPreloaderActive(false);
            return
        }

        props.setMovies(props.allMovies);
        if (props.savedMovies) {
            localStorage.removeItem('saveSearchMovies');
            localStorage.setItem('saveShortMovies', false);
            props.setMovies(AllSaveMovie);
        } else {
            localStorage.removeItem('searchMovies');
            localStorage.setItem('shortMovies', false);
            props.setMovies(allMovie);
        }
        props.setSearchResult(false)
        props.setPreloaderActive(false)
    }

    return (
        <div className="search">
            <form className="search__form" onSubmit={searchMovies} noValidate={true}>
                <div className="search__box">
                    <input className="search__input" placeholder="Поиск" required onChange={(e) => setValue(e.target.value)} />
                    <button type="submit" className="search__search-button">Поиск</button>
                </div>
                <div className="search__container">
                    <input className="search__checkbox" type="checkbox" id="short-film" name="short film" value="true" checked={check} onChange={searchMovies} />
                    <label htmlFor="short-film" onClick={() => setCheck(!check)} ><div className="search__circle" /></label>
                    <p className="search__checkbox-name">Короткометражки</p>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;