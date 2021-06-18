import React from "react";
import img from "../images/test.jpg"

function MoviesCard(props) {
    const link = window.location.pathname;

    return(
        <div className="card">
            <img src={img}alt="фрагмент из фильма" className="card__image"></img>
            <div className="card__box">
                <h2 className="card__name">Название фильма</h2>
                <button className="card__like"></button>
            </div>
            <p className="card__time">2ч12м</p>
        </div>
    );
}

export default MoviesCard;