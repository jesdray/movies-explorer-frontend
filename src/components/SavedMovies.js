import React from "react";

function SavedMovies(props) {
    const [movies, setMovies] = React.useState(props.movies)

    return (
        <>
            <props.searchForm
                movies={props.movies}
                setMovies={setMovies}
            />
            <props.Preloader />
            <props.moviesCardList
                savedMovies={true}
                movies={movies}
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