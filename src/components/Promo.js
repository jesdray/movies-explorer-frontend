import React from "react";
import image from "../images/promo_image.svg";

function Promo(props) {

    return (
        <div className="promo">
            <div className="promo__box">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
            <div className="promo__box">
                <img className="promo__img" src={image} alt="Изображение"></img>
            </div>
        </div>
    );
}

export default Promo;