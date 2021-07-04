import React from "react";
import { MoviesContext } from "../contexts/MoviesContext"

function Movies(props) {
    const movies = React.useContext(MoviesContext);

    return (
        <>
            <props.searchForm
                movies={movies}
                setMovies={props.setMovies}
                allMovies={props.allMovies}
                setPreloaderActive={props.setPreloaderActive}
            />
            <props.Preloader />
            <props.moviesCardList
                savedMovies={false}
                saveMovie={props.saveMovie}
                removeMovies={props.removeMovies}
                setPreloaderActive={props.setPreloaderActive}
                sizeWindow={props.sizeWindow}
            />
        </>
    );
}

export default Movies;