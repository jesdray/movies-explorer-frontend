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
import { MainApi } from "../utils/MainApi"
import { loggedInContext } from "../contexts/loggedInContext";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [openNavigation, setOpenNavigation] = React.useState(false)

  function openNavTab() {
    setOpenNavigation(true);
  };

  function closeNavTab() {
    setOpenNavigation(false);
  }

  return (
    <loggedInContext.Provider value={loggedIn}>
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
    </loggedInContext.Provider >
  );
}

export default App;

// /saved-movies