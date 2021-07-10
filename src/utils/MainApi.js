// http://localhost:3005/
// https://movies-b.students.nomoredomains.club/

class MainApi {
    constructor(token) {
        this._baseUrl = "http://localhost:3005/";
        this._headers = {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
        this._herf = "https://api.nomoreparties.co";
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }

    getUser(JWT) {
        return fetch(`${this._baseUrl}users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JWT}`
            },
        }).then(this._checkResponse);
    }

    editUser(name, email) {
        return fetch(`${this._baseUrl}users/me`, {
            method: "PATCH",
            headers: this._headers,

            body: JSON.stringify({
                "email": email,
                "name": name,
            }),
        }).then(this._checkResponse);
    }

    signUp(name, email, password) {
        return fetch(`${this._baseUrl}signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                "name": name,
                "password": password,
                "email": email
            })
        }).then(this._checkResponse);
    }

    signIn(email, password) {
        return fetch(`${this._baseUrl}signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                "password": password,
                "email": email
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }).then((data) => {
            this._token = data.token
            return data
        })
    }

    getSaveMovies() {
        return fetch(`${this._baseUrl}movies`, {
            method: "GET",
            headers: this._headers,
        }).then(this._checkResponse);
    }

    removeMovies(movieId) {
        return fetch(`${this._baseUrl}movies/${movieId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._checkResponse);
    }

    createMovies(data, image, thumbnail) {
        return fetch(`${this._baseUrl}movies`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                "country": data.country,
                "director": data.director,
                "duration": data.duration,
                "year": data.year,
                "description": data.description,
                "image": image,
                "trailer": data.trailerLink,
                "nameRU": data.nameRU,
                "nameEN": data.nameEN,
                "thumbnail": thumbnail,
                "movieId": data.id,
            })
        }).then(this._checkResponse);
    }
}

const token = localStorage.getItem('token');

const mainApi = new MainApi(token);

export { mainApi, MainApi };