import React from "react";
import { useHistory } from "react-router-dom";
import MoviesCard from "./MoviesCard"

function MoviesCardList(props) {
     const path = useHistory().location.pathname;

     if (path === "/saved-movies") {
          return (
               <div className="movies">
                    <div className="movies__container">
                         <MoviesCard
                              savedMovies={props.savedMovies}
                         />
                         <MoviesCard
                              savedMovies={props.savedMovies}
                         />
                         <MoviesCard
                              savedMovies={props.savedMovies}
                         />
                         <MoviesCard
                              savedMovies={props.savedMovies}
                         />
                         <MoviesCard
                              savedMovies={props.savedMovies}
                         />
                         <MoviesCard
                              savedMovies={props.savedMovies}
                         />
                    </div>
               </div>
          )
     }
     return (
          <div className="movies">
               <div className="movies__container">
                    <MoviesCard
                         savedMovies={props.savedMovies}
                    />
                    <MoviesCard
                         savedMovies={props.savedMovies}
                    />
                    <MoviesCard
                         savedMovies={props.savedMovies}
                    />
                    <MoviesCard
                         savedMovies={props.savedMovies}
                    />
                    <MoviesCard
                         savedMovies={props.savedMovies}
                    />
                    <MoviesCard
                         savedMovies={props.savedMovies}
                    />
               </div>
               <div className="movies__box">
                    <button className="movies__button">Ещё</button>
               </div>
          </div>
     );
}

export default MoviesCardList;