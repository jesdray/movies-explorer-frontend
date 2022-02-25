import React from "react";

function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(props._id ? true : false);
    const href = "https://api.nomoreparties.co";
    const hour = Math.floor(props.movies.duration / 60);
    const minutes = props.movies.duration - (hour * 60);
    const image = props.savedMovies ? props.movies.image : href + props.movies.image.url;
    const thumbnail = href + props.thumbnailUrl;

    function onCardLike() {
        props.setPreloaderActive(true)
        if (!isLiked) {
            props.saveMovie(props.movies, image, thumbnail);
            setIsLiked(!isLiked);
            return
        }
        props.removeMovies(props._id);
        setIsLiked(!isLiked);
    }

    function onCardremove() {
        props.setPreloaderActive(true)
        setIsLiked(!isLiked);
        props.removeMovies(props._id);
    }

    return (
        <article className="card">
            <a href={props.movies.trailerLink} className="card__link" rel="noreferrer" target="_blank"><img src={image} alt="фрагмент из фильма" className="card__image"></img></a>
            <div className="card__box">
                <h2 className="card__name">{props.movies.nameRU}</h2>
                {props.savedMovies ? <button className="card__plus" onClick={onCardremove}></button> : <button onClick={onCardLike} className={isLiked ? "card__like card__like_active" : "card__like"}></button>}
            </div>
            <p className="card__time">{hour}ч{minutes}м</p>
        </article>
    );
}

export default MoviesCard;