import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Profile(props) {
    const user = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(user.name);
    const [email, setEmail] = React.useState(user.email);

    function handleSubmit(e) {
        e.preventDefault();

        props.setPreloaderActive(true)
        props.editUser(name, email)
    }

    return (
        <div className="profile">
            <h1 className="profile__title">Привет, {user.name}!</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__box">
                    <p className="profile__input-name">Имя</p>
                    <input className="profile__input" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="profile__box">
                    <p className="profile__input-name">E-mail</p>
                    <input className="profile__input" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </form>
            <button className="profile__button" onClick={handleSubmit}>Редактировать</button>
            <button className="profile__button profile__button_red" onClick={props.onSignOut}>Выйти из аккаунта</button>
        </div>
    );
}

export default Profile;