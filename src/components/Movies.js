import React from "react";
import { MoviesContext } from "../contexts/MoviesContext"

function Movies(props) {
    const movies = React.useContext(MoviesContext);

    return (
        <>
            <props.searchForm
                movies={movies}
                savedMovies={false}
                setMovies={props.setMovies}
                allMovies={props.allMovies}
                setPreloaderActive={props.setPreloaderActive}
                setSearchResult={props.setSearchResult}
            />
            <props.Preloader />
            <props.moviesCardList
                savedMovies={false}
                saveMovie={props.saveMovie}
                removeMovies={props.removeMovies}
                setPreloaderActive={props.setPreloaderActive}
                sizeWindow={props.sizeWindow}
                searchResult={props.searchResult}
            />
        </>
    );
}

export default Movies;