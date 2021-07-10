import React from "react";
import MoviesCard from "./MoviesCard"

function MoviesCardList(props) {
     const movies = JSON.parse(localStorage.getItem('movies'))
     let saveMovies = JSON.parse(localStorage.getItem('saveMovies'))
     const movi = props.savedMovies ? JSON.parse(localStorage.getItem('saveSearchMovies')) : JSON.parse(localStorage.getItem('searchMovies'));
     saveMovies = localStorage.getItem('saveSearchMovies') !== null ? JSON.parse(localStorage.getItem('saveSearchMovies')) : saveMovies;
     const [idMovies, setIdMovies] = React.useState((props.sizeWindow < 601 ? 5 : 8) + (props.sizeWindow > 940 && 4));
     const renderMovies = movi !== null ?
          movi.filter(function (item, i) {
               return i < idMovies
          }) : movies.filter(function (item, i) {
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
               <h2 className={props.searchResult ? "movies__result" : "movies__result movies__result_disabled"}>Ничего не найдено</h2>
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
                         <button className={idMovies >= movies.length ? "movies__button movies__button_disabled" : "movies__button"} onClick={getMoreMovies} disabled={idMovies >= movies.length ? true : false}>Ещё</button>
                    </div>
               }
          </div>
     );
}

export default MoviesCardList;