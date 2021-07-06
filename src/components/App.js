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
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { PreloaderActiveContext } from "../contexts/PreloaderActiveContext";
import { MoviesContext } from "../contexts/MoviesContext";
import { SaveMoviesContext } from "../contexts/SaveMoviesContext";

function App() {
  const history = useHistory()
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState([])
  const [saveMovies, setSaveMovies] = React.useState([]);
  const [allSaveMovies, setAllSaveMovies] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState();
  const [preloaderActive, setPreloaderActive] = React.useState(false);
  const [sizeWindow, setSizeWindow] = React.useState(window.innerWidth)

  window.addEventListener("resize", resizeThrottler, false)

  let resizeTimeout = "";
  function resizeThrottler(size) {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        setSizeWindow(size.target.innerWidth)
      }, 4000);
    }
  }

  function tokenCheck() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      mainApi.getUser(token)
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
    const token = localStorage.getItem('token');
    mainApi
      .getUser(token)
      .then((data) => {
        setCurrentUser(data);
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
            movieId: item.id,
          };
        });
        setMovies(cardMovies);
        setAllMovies(cardMovies)
        setPreloaderActive(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function apiGetSaveMovies() {
    mainApi
      .getSaveMovies()
      .then((movies) => {
        setSaveMovies(movies.data.reverse())
        setAllSaveMovies(movies.data.reverse())
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    tokenCheck();
    if (localStorage.getItem('token')) {
      apiGetUser();
      apiGetMovies();
      apiGetSaveMovies();
    }
  }, []);

  function saveMovie(data, image, thumbnail) {
    mainApi
      .createMovies(data, image, thumbnail)
      .then((newSaveMovies) => {
        setSaveMovies([newSaveMovies, ...saveMovies]);
        setAllSaveMovies([newSaveMovies, ...allSaveMovies])
      })
      .finally(() => {
        setPreloaderActive(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function removeMovies(moviesId) {
    mainApi
      .removeMovies(moviesId)
      .then(() => {
        const saveMovi = saveMovies.filter((m) => m._id !== moviesId)
        setSaveMovies(saveMovi);
        setAllSaveMovies(saveMovi)
      })
      .finally(() => {
        setPreloaderActive(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function openNavTab() {
    setOpenNavigation(true);
  };

  function closeNavTab() {
    setOpenNavigation(false);
  }

  function onRegister(name, email, password) {
    mainApi
      .signUp(name, email, password)
      .then(() => {
        history.push('/signin')
      })
      .finally(() => {
        setPreloaderActive(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLogin(email, password) {
    mainApi
      .signIn(email, password)
      .then((data) => {
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        history.push('/')
      })
      .finally(() => {
        setPreloaderActive(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false)
  }

  function editUser(name, email) {
    mainApi
      .editUser(name, email)
      .then((newUser) => setCurrentUser(newUser))
      .finally(() => {
        setPreloaderActive(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInContext.Provider value={loggedIn}>
        <PreloaderActiveContext.Provider value={preloaderActive}>
          <MoviesContext.Provider value={movies}>
            <SaveMoviesContext.Provider value={saveMovies}>
              <div className="page">
                <Switch>
                  <Route exact path="/">
                    <Header
                      openNavTab={openNavTab}
                      sizeWindow={sizeWindow}
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
                    {loggedIn ?
                      <>
                        <Header
                          openNavTab={openNavTab}
                          sizeWindow={sizeWindow}
                        />
                        <Movies
                          searchForm={SearchForm}
                          moviesCardList={MoviesCardList}
                          setMovies={setMovies}
                          saveMovie={saveMovie}
                          removeMovies={removeMovies}
                          Preloader={Preloader}
                          setPreloaderActive={setPreloaderActive}
                          sizeWindow={sizeWindow}
                          allMovies={allMovies}
                        />
                        <Footer />
                      </> : <Redirect to="/" />}
                  </Route>
                  <Route path="/saved-movies">
                    {loggedIn ?
                      <>
                        <Header
                          openNavTab={openNavTab}
                          sizeWindow={sizeWindow}
                        />
                        <SavedMovies
                          searchForm={SearchForm}
                          moviesCardList={MoviesCardList}
                          setMovies={setSaveMovies}
                          saveMovie={saveMovie}
                          removeMovies={removeMovies}
                          Preloader={Preloader}
                          setPreloaderActive={setPreloaderActive}
                          sizeWindow={sizeWindow}
                          allMovies={allSaveMovies}
                        />
                        <Footer />
                      </> : <Redirect to="/" />}
                  </Route>
                  <Route path="/profile">
                    {loggedIn ?
                      <>
                        <Header
                          openNavTab={openNavTab}
                          sizeWindow={sizeWindow}
                        />
                        <Profile
                          Preloader={Preloader}
                          setPreloaderActive={setPreloaderActive}
                          editUser={editUser}
                          onSignOut={onSignOut}
                        />
                      </>
                      : <Redirect to="/" />}
                  </Route>
                  <Route path="/signup">
                    <Register
                      Preloader={Preloader}
                      setPreloaderActive={setPreloaderActive}
                      onRegister={onRegister}
                    />
                  </Route>
                  <Route path="/signin">
                    <Login
                      Preloader={Preloader}
                      setPreloaderActive={setPreloaderActive}
                      onLogin={onLogin}
                    />
                  </Route>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
                <Navigation
                  open={openNavigation}
                  closeNavTab={closeNavTab}
                />
              </div>
            </SaveMoviesContext.Provider>
          </MoviesContext.Provider>
        </PreloaderActiveContext.Provider>
      </LoggedInContext.Provider >
    </CurrentUserContext.Provider >
  );
}

export default App;

// /saved-movies