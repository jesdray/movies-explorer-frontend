import React from "react";

function Movies(props) {

    return (
        <>
            <props.searchForm />
            <props.moviesCardList
                savedMovies={false}
                movies={props.movies}
            />
        </>
    );
}

export default Movies;