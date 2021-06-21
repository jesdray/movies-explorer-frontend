import React from "react";

function SavedMovies(props) {

    return(
        <>  
            <props.searchForm />
            <props.moviesCardList 
                savedMovies={true}
            />
        </>
    );
}

export default SavedMovies;