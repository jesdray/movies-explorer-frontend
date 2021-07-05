import React from "react";
import MoviesCard from "./MoviesCard"
import { MoviesContext } from "../contexts/MoviesContext"
import { SaveMoviesContext } from "../contexts/SaveMoviesContext"

function MoviesCardList(props) {
     const movies = React.useContext(MoviesContext);
     const saveMovies = React.useContext(SaveMoviesContext);
     const [idMovies, setIdMovies] = React.useState((props.sizeWindow < 601 ? 5 : 8) + (props.sizeWindow > 940 && 4));
     const renderMovies = movies.filter(function (item, i) {
          return i < idMovies
     });

     function getMoreMovies() {
          if (props.sizeWindow < 1280 & props.sizeWindow > 940) {
               setIdMovies(idMovies + 3)
               return
          }
          if (props.sizeWindow < 941 & props.sizeWindow > 600) {
               setIdMovies(idMovies + 2)
               return
          }
          if (props.sizeWindow < 601) {
               setIdMovies(idMovies + 1)
               return
          } else {
               setIdMovies(idMovies + 4)
               return
          }
     }

     function checkLike(item) {
          const like = saveMovies.map((m) => {
               if (m.movieId === item.movieId) {
                    return m._id
               }
               return;
          })

          return like.find((item => item !== undefined))
     }

     return (
          <div className="movies">
               <div className="movies__container">
                    {props.savedMovies ?
                         saveMovies.map((item) => (
                              <MoviesCard
                                   key={item.movieId}
                                   _id={item._id}
                                   movies={item}
                                   removeMovies={props.removeMovies}
                                   saveMovie={props.saveMovie}
                                   savedMovies={props.savedMovies}
                                   setPreloaderActive={props.setPreloaderActive}
                              />
                         )) : renderMovies.map((item) => (
                              <MoviesCard
                                   key={item.movieId}
                                   _id={checkLike(item)}
                                   movies={item}
                                   saveMovie={props.saveMovie}
                                   removeMovies={props.removeMovies}
                                   savedMovies={props.savedMovies}
                                   setPreloaderActive={props.setPreloaderActive}
                              />
                         ))
                    }
               </div>
               {!props.savedMovies &&
                    <div className="movies__box">
                         <button className={idMovies >= 100 ? "movies__button movies__button_disabled" : "movies__button"} onClick={getMoreMovies} disabled={idMovies >= 100 ? true : false}>Ещё</button>
                    </div>
               }
          </div>
     );
}

export default MoviesCardList;