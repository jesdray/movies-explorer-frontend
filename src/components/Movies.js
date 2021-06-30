import React from "react";

function Movies(props) {

    return (
        <>
            <props.searchForm />
            <props.Preloader />
            <props.moviesCardList
                savedMovies={false}
                movies={props.movies}
                saveMovie={props.saveMovie}
                removeMovies={props.removeMovies}
                setPreloaderActive={props.setPreloaderActive}
                sizeWindow={props.sizeWindow}
            />
        </>
    );
}

export default Movies;