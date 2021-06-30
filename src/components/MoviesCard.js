import React from "react";

function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(false);
    const href = "https://api.nomoreparties.co";
    const hour = Math.floor(props.movies.duration / 60);
    const minutes = props.movies.duration - (hour * 60);

    function onCardLike() {
        setIsLiked(!isLiked);
    }

    if (props.savedMovies) {
        return (
            <article className="card">
                <a href={props.movies.trailerLink} className="card__link" rel="noreferrer" target="_blank"><img src={href + props.movies.image.url} alt="фрагмент из фильма" className="card__image"></img></a>
                <div className="card__box">
                    <h2 className="card__name">{props.movies.nameRU}</h2>
                    <button className="card__plus"></button>
                </div>
                <p className="card__time">{hour}ч{minutes}м</p>
            </article>
        );
    }
    return (
        <article className="card">
            <a href={props.movies.trailerLink} className="card__link" rel="noreferrer" target="_blank"><img src={href + props.movies.image.url} alt="фрагмент из фильма" className="card__image"></img></a>
            <div className="card__box">
                <h2 className="card__name">{props.movies.nameRU}</h2>
                <button onClick={onCardLike} className={isLiked ? "card__like card__like_active" : "card__like"}></button>
            </div>
            <p className="card__time">{hour}ч{minutes}м</p>
        </article>
    );
}

export default MoviesCard;