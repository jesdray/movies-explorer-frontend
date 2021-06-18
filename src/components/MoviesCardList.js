import React from "react";
import MoviesCard from "./MoviesCard"

function MoviesCardList(props) {

    return(
        <div className="movies">
            <div className="movies__container">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <div className="movies__box">
                <button className="movies__button">Ещё</button>
            </div>
        </div>
    );
}

export default MoviesCardList;