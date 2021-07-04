import React from "react";
import { SaveMoviesContext } from "../contexts/SaveMoviesContext"

function SavedMovies(props) {
    const saveMovies = React.useContext(SaveMoviesContext);


    return (
        <>
            <props.searchForm
                movies={saveMovies}
                setMovies={props.setMovies}
                allMovies={props.allMovies}
                setPreloaderActive={props.setPreloaderActive}
            />
            <props.Preloader />
            <props.moviesCardList
                savedMovies={true}
                removeMovies={props.removeMovies}
                setPreloaderActive={props.setPreloaderActive}
                sizeWindow={props.sizeWindow}
            />
        </>
    );
}

export default SavedMovies;