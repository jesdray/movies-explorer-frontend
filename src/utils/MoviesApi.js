import Movies from "../components/Movies";

class MoviesApi {
    constructor() {
        this._baseUrl = "https://api.nomoreparties.co/beatfilm-movies/";
    }
}

const moviesApi = new MoviesApi();

export { moviesApi, MoviesApi }