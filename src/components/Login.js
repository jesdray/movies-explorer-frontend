import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
    const [buttonActive, setButtonActive] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [errorEmail, setErrorEmail] = React.useState("");
    const [errorPassword, setErrorPassword] = React.useState("");

    function setInput(e) {
        if (e.target.name === "email") {
            console.log(e.target.validationMessage);
            setEmail(e.target.value);
            return;
        }
        if (e.target.name === "password") {
            console.log(e.target.validationMessage);
            setPassword(e.target.value);
            return;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        props.setPreloaderActive(true);
        props.onLogin(email, password); 
    }

    return (
        <div className="register">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__box">
                    <Link className="logo logo__form" to="/"></Link>
                    <h1 className="form__title">Рады видеть!</h1>
                    <p className="form__input-name">E-mail</p>
                    <input type="text" className="form__input" required name="email" onChange={setInput}></input>
                    <span className="form__span">{errorEmail}</span>
                    <p className="form__input-name">Пароль</p>
                    <input type="password" className="form__input" required name="password" onChange={setInput}></input>
                    <span className="form__span">{errorPassword}</span>
                </div>
                <props.Preloader />
                <div className="form__box">
                    <button type="submit" className={buttonActive ? "form__button" : "form__button form__button_disabled"} disabled={buttonActive}>Войти</button>
                    <Link className="form__link" to="/signup">Ещё не зарегистрированы?<span className="form__span_link">Регистрация</span></Link>
                </div>
            </form>
        </div>
    );

}

export default Login;