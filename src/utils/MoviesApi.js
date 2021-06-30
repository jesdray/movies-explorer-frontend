class MoviesApi {
    constructor() {
        this._baseUrl = "https://api.nomoreparties.co/beatfilm-movies/";
        this._headers = {
            "Content-Type": "application/json",
        };
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            method: "GET",
        }).then(this._checkResponse)
    }
}

const moviesApi = new MoviesApi();

export { moviesApi, MoviesApi }