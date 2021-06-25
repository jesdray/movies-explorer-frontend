import React from "react";
import img from "../images/test.jpg";

function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(false);

    function onCardLike() {
        setIsLiked(!isLiked);
    }

    if (props.savedMovies) {
        return(
            <div className="card">
                <img src={img}alt="фрагмент из фильма" className="card__image"></img>
                <div className="card__box">
                    <h2 className="card__name">Название фильма</h2>
                    <button className="card__plus"></button>
                </div>
                <p className="card__time">2ч12м</p>
            </div>
        );
    }
    return(
        <div className="card">
            <img src={img}alt="фрагмент из фильма" className="card__image"></img>
            <div className="card__box">
                <h2 className="card__name">Название фильма</h2>
                <button onClick={onCardLike} className={isLiked ? "card__like card__like_active" : "card__like"}></button>
            </div>
            <p className="card__time">2ч12м</p>
        </div>
    );
}

export default MoviesCard;