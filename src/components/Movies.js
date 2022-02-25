import React from "react";

function Movies(props) {

    return (
        <>
            <props.searchForm />
            <props.moviesCardList
                savedMovies={false}
            />
        </>
    );
}

export default Movies;