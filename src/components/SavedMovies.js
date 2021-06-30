import React from "react";

function SavedMovies(props) {
    console.log(props.movies);

    return (
        <>  
            <props.searchForm />
            <props.Preloader />
            <props.moviesCardList
                savedMovies={true}
                movies={props.movies}
                imageUrl={props.movies.image}
                thumbnailUrl={props.movies.thumbnail}
                saveMovie={props.saveMovie}
                removeMovies={props.removeMovies}
                setPreloaderActive={props.setPreloaderActive}
                sizeWindow={props.sizeWindow}
            />
        </>
    );
}

export default SavedMovies;