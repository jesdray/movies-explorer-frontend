import React from "react";

function Movies(props) {
    const [movies, setMovies] = React.useState(props.movies)

    return (
        <>
            <props.searchForm
                movies={props.movies}
                setMovies={setMovies}
            />
            <props.Preloader />
            <props.moviesCardList
                savedMovies={false}
                movies={movies}
                saveMovies={props.saveMovies}
                saveMovie={props.saveMovie}
                removeMovies={props.removeMovies}
                setPreloaderActive={props.setPreloaderActive}
                sizeWindow={props.sizeWindow}
            />
        </>
    );
}

export default Movies;