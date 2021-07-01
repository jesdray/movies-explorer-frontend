import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Profile(props) {
    const currendUser = React.useContext(CurrentUserContext)
    const [editing, setEditing] = React.useState(false)
    const [name, setName] = React.useState(currendUser.data.name)
    const [email, setEmail] = React.useState(currendUser.data.email)

    function setInput(e) {
        if (e.target.name === "email") {
            console.log(e.target.validationMessage);
            setEmail(e.target.value);
            return;
        }
        if (e.target.name === "name") {
            console.log(e.target.validationMessage);
            setName(e.target.value);
            return;
        }
    }

    function editInf() {
        setEditing(true)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (name !== currendUser.data.name || email !== currendUser.data.email) {
            props.editProfile(name, email)
        }
    }


    return (
        <div className="profile">
            <h1 className="profile__title">Привет, {currendUser.data.name}!</h1>
            <form className="profile__form">
                <div className="profile__box">
                    <p className="profile__input-name">Имя</p>
                    <input name="name" type="text" className="profile__input profile__input_disabled" value={name} readonly={!editing ? true : false} onChange={setInput} required />
                    <span className="error__span"></span>
                </div>
                <div className="profile__box">
                    <p className="profile__input-name">E-mail</p>
                    <input name="email" type="text" className="profile__input profile__input_disabled" value={email} readonly={!editing ? true : false} onChange={setInput} required />
                    <span className="error__span"></span>
                </div>
                <button type="button" className="profile__button" onClick={editing ? handleSubmit : editInf}>Редактировать</button>
            </form>
            <Link className="profile__link profile__link_red" to="/signup">Выйти из аккаунта</Link>
        </div>
    );
}

export default Profile;