/* eslint-disable no-unused-vars */
import React from "react";
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Movies from "./Movies";
import SavedMovies from "./SavedMovies";
import Profile from "./Profile";
import Login from './Login';
import Register from './Register';
import AboutProject from "./AboutProject";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import SearchForm from "./SearchForm"
import MoviesCardList from "./MoviesCardList"
import Portfolio from "./Portfolio"
import Promo from "./Promo";
import NotFound from "./NotFound"
import Navigation from "./Navigation";
import Preloader from "./Preloader";
import { mainApi } from "../utils/MainApi";
import { moviesApi } from "../utils/MoviesApi";
import { LoggedInContext } from "../contexts/loggedInContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [saveMovies, setSaveMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState();

  function tokenCheck() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      mainApi.usersMe(token)
        .then((res) => {
          if (res) {
            setLoggedIn(!loggedIn);
          }
        }).catch((err) => {
          console.log(err);
        });
    }
  }

  function apiGetUser() {
    mainApi
      .getUser()
      .then((data) => {
        setCurrentUser(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function apiGetMovies() {
    moviesApi
      .getMovies()
      .then((data) => {
        const cardMovies = data.map((item) => {
          return {
            id: item.id,
            country: item.country,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            image: item.image,
            trailerLink: item.trailerLink,
            nameRU: item.nameRU,
            nameEN: item.nameEN,
            thumbnail: item.image.formats.thumbnail,
            movieId: item.movieId,
          };
        });
        setMovies(cardMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    apiGetMovies();
  }, []);

  function openNavTab() {
    setOpenNavigation(true);
  };

  function closeNavTab() {
    setOpenNavigation(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInContext.Provider value={loggedIn}>
        <Switch>
          <div className="page">
            <Route exact path="/">
              <Header
                openNavTab={openNavTab}
              />
              <Main
                promo={Promo}
                aboutProject={AboutProject}
                techs={Techs}
                aboutMe={AboutMe}
                portfolio={Portfolio}
              />
              <Footer />
            </Route>
            <Route path="/movies">
              <Header
                openNavTab={openNavTab}
              />
              <Movies
                searchForm={SearchForm}
                moviesCardList={MoviesCardList}
                movies={movies}
              />
              <Footer />
            </Route>
            <Route path="/saved-movies">
              <Header
                openNavTab={openNavTab}
              />
              <SavedMovies
                searchForm={SearchForm}
                moviesCardList={MoviesCardList}
                movies={saveMovies}
              />
              <Footer />
            </Route>
            <Route path="/profile">
              <Header
                openNavTab={openNavTab}
              />
              <Profile />
            </Route>
            <Route path="/signup">
              <Login />
            </Route>
            <Route path="/signin">
              <Register />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Navigation
              open={openNavigation}
              closeNavTab={closeNavTab}
            />
          </div>
        </Switch>
      </LoggedInContext.Provider >
    </CurrentUserContext.Provider >
  );
}

export default App;

// /saved-movies