import logo from './logo.svg';
import './App.css';
import { loggedInContext } from "./contexts/loggedInContext"

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <loggedInContext.Provider value={loggedIn}>
      <Switch>
        <div className="page">
          <Header />
          <Route path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Footer />
        </div>
      </Switch>
    </loggedInContext.Provider>
  );
}

export default App;
