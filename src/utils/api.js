class Api {
    constructor(token) {
        this._baseUrl = "https://movies-b.students.nomoredomains.club/";
        this._headers = {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
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

    editUser(data) {
        return fetch(`${this._baseUrl}users/me`, {
            method: "PATCH",
            headers: this._headers,

            body: JSON.stringify({
                "email": data.email,
                "name": data.name,
            }),
        }).then(this._checkResponse);
    }

    signUp(name, password, email) {
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

    signIn(password, email) {
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

    getSaveMovies(JWT) {
        return fetch(`${this._baseUrl}movies`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JWT}`
            },
        }).then(this._checkResponse);
    }

    removeMovies(movies) {
        return fetch(`${this._baseUrl}cards/${movies}`, {
          method: "DELETE",
          headers: this._headers,
        }).then(this._checkResponse);
      }
}

export default Api;