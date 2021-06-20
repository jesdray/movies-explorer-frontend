import React from "react";

function Movies(props) {

    return (
        <>
            <props.searchForm />
            <props.moviesCardList />
        </>
    );
}

export default Movies;