import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    function setInput(e) {
        if (e.target.name === "name") {
            setName(e.target.value);
            return;
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
            return;
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
            return;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.setPreloaderActive(true);
        props.onRegister(name, email, password);
    }

    return (
        <div className="login">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__box">
                    <Link className="logo logo__form" to="/"></Link>
                    <h1 className="form__title">Добро пожаловать!</h1>
                    <p className="form__input-name">Имя</p>
                    <input type="text" className="form__input" required name="name" onChange={setInput}></input>
                    <span className="form__span"></span>
                    <p className="form__input-name">E-mail</p>
                    <input type="text" className="form__input" required name="email" onChange={setInput}></input>
                    <span className="form__span"></span>
                    <p className="form__input-name">Пароль</p>
                    <input type="password" className="form__input" required name="password" onChange={setInput}></input>
                    <span className="form__span"></span>
                </div>
                <props.Preloader />
                <div className="form__box">
                    <button type="submit" className="form__button">Зарегистрироваться</button>
                    <Link className="form__link" to="/signin">Уже зарегистрированы?<span className="form__span_link">Войти</span></Link>
                </div>
            </form>
        </div>
    );
}

export default Register;