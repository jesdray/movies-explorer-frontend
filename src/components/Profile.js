import React from "react";
import { useFormWithValidation } from "./FormValidator";
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Profile(props) {
    const user = React.useContext(CurrentUserContext);
    const name = useFormWithValidation(`${user.name}`, { isEmpty: true, minLength: 2, isChanged: true })
    const email = useFormWithValidation(`${user.email}`, { isEmpty: true, isEmail: true, isChanged: true })
    const formValid = name.isValid && email.isValid;

    function handleSubmit(e) {
        e.preventDefault();

        props.setPreloaderActive(true)
        props.editUser(name.value, email.value)
    }

    return (
        <div className="profile">
            <h1 className="profile__title">Привет, {user.name}!</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__box">
                    <p className="profile__input-name">Имя</p>
                    <input className="profile__input" value={name.value} onChange={(e) => name.onChange(e)} onBlur={(e) => name.onBlur(e)} />
                </div>
                <span className="profile__span">{name.errorMessage}</span>
                <div className="profile__box">
                    <p className="profile__input-name">E-mail</p>
                    <input className="profile__input" value={email.value} onChange={(e) => email.onChange(e)} onBlur={(e) => email.onBlur(e)} />
                </div>
                <span className="profile__span">{email.errorMessage}</span>
            </form>
            <button className={formValid ? "profile__button" : "profile__button profile__button_disabled"} onClick={handleSubmit} disabled={formValid ? false : true}>Редактировать</button>
            <button className="profile__button profile__button_red" onClick={props.onSignOut}>Выйти из аккаунта</button>
        </div>
    );
}

export default Profile;