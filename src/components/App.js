/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
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
import ProtectedRoute from "./ProtectedRoute";

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
  const [message, setMessage] = React.useState("")
  const [searchResult, setSearchResult] = React.useState(false)

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
            localStorage.setItem('loggedIn', true);
            setLoggedIn(true);
          } else {
            localStorage.setItem('loggedIn', false);
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
        localStorage.setItem('currentUser', JSON.stringify(data));
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
        localStorage.setItem('movies', JSON.stringify(cardMovies));
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
        localStorage.setItem('saveMovies', JSON.stringify(movies.data.reverse()));
        setSaveMovies(movies.data.reverse())
        setAllSaveMovies(movies.data.reverse())
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    apiGetMovies()
    const log = localStorage.getItem('loggedIn')
    tokenCheck();
    if (log === "true") {
      setLoggedIn(true)
    }
    if (localStorage.getItem('token')) {
      apiGetUser();
      if (localStorage.getItem('currentUser')) {
        const user = JSON.parse(localStorage.getItem('currentUser'))

        setCurrentUser(user)
      }
      apiGetMovies()
      if (localStorage.getItem('movies')) {
        const movie = JSON.parse(localStorage.getItem('movies'));

        setMovies(movie);
        setAllMovies(movie)
      }
      apiGetSaveMovies();
      if (localStorage.getItem('saveMovies')) {
        const saveMovie = JSON.parse(localStorage.getItem('saveMovies'));


      }
    }
  }, []);

  function saveMovie(data, image, thumbnail) {
    mainApi
      .createMovies(data, image, thumbnail)
      .then((newSaveMovies) => {
        localStorage.setItem('saveMovies', JSON.stringify([newSaveMovies, ...saveMovies]));
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
        mainApi
          .signIn(email, password)
          .then((data) => {
            apiGetMovies();
            localStorage.setItem('token', data.token);
            localStorage.setItem('loggedIn', true);
            setLoggedIn(true);
            history.push('/')
            history.push('/movies')
          })
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
        apiGetMovies();
        localStorage.setItem('token', data.token);
        localStorage.setItem('loggedIn', true);
        setLoggedIn(true);
        history.push('/')
        history.push('/movies')
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
    localStorage.setItem('loggedIn', false);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('saveMovies');
    localStorage.removeItem('searchMovies');
    localStorage.removeItem('shortMovies');
    setLoggedIn(false)
    history.push('/')
    window.location.reload()
  }

  function editUser(name, email) {
    mainApi
      .editUser(name, email)
      .then((newUser) => {
        localStorage.setItem('currentUser', JSON.stringify(newUser))
        setCurrentUser(newUser)
        setMessage("Данные изменены")
        setTimeout(() => setMessage(""), 5000)
      })
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
                  <ProtectedRoute
                    path="/movies"
                    Header={Header}
                    openNavTab={openNavTab}
                    sizeWindow={sizeWindow}
                    component={Movies}
                    searchForm={SearchForm}
                    moviesCardList={MoviesCardList}
                    setMovies={setMovies}
                    saveMovie={saveMovie}
                    removeMovies={removeMovies}
                    Preloader={Preloader}
                    setPreloaderActive={setPreloaderActive}
                    allMovies={allMovies}
                    searchResult={searchResult}
                    setSearchResult={setSearchResult}
                    Footer={Footer}
                    setMessage={setMessage}
                  />
                  <ProtectedRoute
                    path="/saved-movies"
                    Header={Header}
                    openNavTab={openNavTab}
                    sizeWindow={sizeWindow}
                    component={SavedMovies}
                    searchForm={SearchForm}
                    moviesCardList={MoviesCardList}
                    setMovies={setSaveMovies}
                    saveMovie={saveMovie}
                    removeMovies={removeMovies}
                    Preloader={Preloader}
                    setPreloaderActive={setPreloaderActive}
                    allMovies={allSaveMovies}
                    searchResult={searchResult}
                    setSearchResult={setSearchResult}
                    Footer={Footer}
                    setMessage={setMessage}
                  />
                  <ProtectedRoute
                    path="/profile"
                    Header={Header}
                    openNavTab={openNavTab}
                    sizeWindow={sizeWindow}
                    component={Profile}
                    Preloader={Preloader}
                    setPreloaderActive={setPreloaderActive}
                    editUser={editUser}
                    onSignOut={onSignOut}
                    message={message}
                  />
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