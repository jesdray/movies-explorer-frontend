import React from "react";

function SavedMovies(props) {

    return(
        <>  
            <props.searchForm />
            <props.moviesCardList 
                savedMovies={true}
                movies={props.movies}
            />
        </>
    );
}

export default SavedMovies;