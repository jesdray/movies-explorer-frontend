import React from "react";
import { useHistory } from "react-router-dom";
import MoviesCard from "./MoviesCard"

function MoviesCardList(props) {
     const path = useHistory().location.pathname;
     const widthWindow = window.innerWidth;
     const [idMovies, setIdMovies] = React.useState((widthWindow < 601 ? 5 : 8) + (widthWindow > 940 && 4))
     const movies = props.movies.filter(function (item) {
          return item.id <= idMovies
     })

     function getMoreMovies() {
          if (widthWindow < 1280 & widthWindow > 940) {
               setIdMovies(idMovies + 3)
               return
          }
          if (widthWindow < 941 & widthWindow > 600) {
               setIdMovies(idMovies + 2)
               return
          }
          if (widthWindow < 601) {
               setIdMovies(idMovies + 1)
               return
          } else {
               setIdMovies(idMovies + 4)
               return
          }
     }

     if (path === "/saved-movies") {
          return (
               <div className="movies">
                    <div className="movies__container">
                         {props.saveMovies !== undefined &&
                              props.saveMovies.map((item) => (
                                   <MoviesCard
                                        key={item.id}
                                        movies={item}
                                   />
                              ))}
                    </div>
               </div>
          )
     }
     return (
          <div className="movies">
               <div className="movies__container">
                    {props.movies !== undefined &&
                         movies.map((item) => (
                              <MoviesCard
                                   key={item.id}
                                   movies={item}
                              />
                         ))}
               </div>
               <div className="movies__box">
                    <button className="movies__button" onClick={getMoreMovies}>Ещё</button>
               </div>
          </div>
     );
}

export default MoviesCardList;