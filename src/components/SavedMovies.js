import React from "react";
import { SaveMoviesContext } from "../contexts/SaveMoviesContext"

function SavedMovies(props) {
    const saveMovies = React.useContext(SaveMoviesContext);


    return (
        <>
            <props.searchForm
                movies={saveMovies}
                savedMovies={true}
                setMovies={props.setMovies}
                allMovies={props.allMovies}
                setPreloaderActive={props.setPreloaderActive}
                setSearchResult={props.setSearchResult}
            />
            <props.Preloader />
            <props.moviesCardList
                savedMovies={true}
                removeMovies={props.removeMovies}
                setPreloaderActive={props.setPreloaderActive}
                sizeWindow={props.sizeWindow}
                searchResult={props.searchResult}
            />
        </>
    );
}

export default SavedMovies;