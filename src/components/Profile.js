import React from "react";
import { Link } from "react-router-dom";

function Profile(props) {

    return (
        <div className="profile">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <form className="profile__form">
                <div className="profile__box">
                    <p className="profile__input-name">Имя</p>
                    <input className="profile__input" value="Виталий"></input>
                </div>
                <div className="profile__box">
                    <p className="profile__input-name">E-mail</p>
                    <input className="profile__input" value="pochta@yandex.ru"></input>
                </div>
            </form>
            <Link className="profile__link">Редактировать</Link>
            <Link className="profile__link profile__link_red" to="/signup">Выйти из аккаунта</Link>
        </div>
    );
}

export default Profile;