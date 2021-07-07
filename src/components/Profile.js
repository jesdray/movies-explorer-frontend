import React from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "./FormValidator";
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Profile(props) {
    const user = React.useContext(CurrentUserContext);
    const name = useFormWithValidation(`${user.name}`, { isEmpty: true, minLength: 2, isChanged: true })
    const email = useFormWithValidation(`${user.email}`, { isEmpty: true, isEmail: true, isChanged: true })
    const formValid = name.valid && email.valid;

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
                    <input className="profile__input" value={name.value} onChange={(e) => name.onChange(e)} />
                </div>
                <div className="profile__box">
                    <p className="profile__input-name">E-mail</p>
                    <input className="profile__input" value={email.value} onChange={(e) => email.onChange(e)} />
                </div>
            </form>
            <button className="profile__button" onClick={handleSubmit} disabled={formValid}>Редактировать</button>
            <button className="profile__button profile__button_red" onClick={props.onSignOut}>Выйти из аккаунта</button>
        </div>
    );
}

export default Profile;