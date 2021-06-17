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
import { loggedInContext } from "../contexts/loggedInContext";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <loggedInContext.Provider value={loggedIn}>
      <Switch>
        <div className="page">
          <Header />
          <Main
            aboutProject={AboutProject}
            techs={Techs}
            aboutMe={AboutMe}
            searchForm={SearchForm}
            />
          <Footer />
        </div>
      </Switch>
    </loggedInContext.Provider>
  );
}

export default App;


          //  ( <Route path="/">
          //     <Main />
          //   </Route>
          //   <Route path="/movies">
          //     <Movies />
          //   </Route>
          //   <Route path="/saved-movies">
          //     <SavedMovies />
          //   </Route>
          //   <Route path="/profile">
          //     <Profile />
          //   </Route>
          //   <Route path="/signin">
          //     <Login />
          //   </Route>
          //   <Route path="/signup">
          //     <Register />
          //   </Route>)