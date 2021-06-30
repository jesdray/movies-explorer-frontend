import React from "react";

function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(false);
    const href = "https://api.nomoreparties.co";
    const hour = Math.floor(props.movies.duration / 60);
    const minutes = props.movies.duration - (hour * 60);
    const image = href + (props.savedMovies ? props.movies.image : props.movies);
    const thumbnail = href + props.thumbnailUrl;

    function onCardLike() {
        if (!isLiked) {
            props.saveMovie(props.movies, image, thumbnail);
            setIsLiked(!isLiked);
            return
        }
        props.removeMovies(props.movies.movieId);
        setIsLiked(!isLiked);
    }

    function onCardremove() {
        setIsLiked(!isLiked);
        props.removeMovies(props.movies.movieId);
    }

    if (props.savedMovies) {
        return (
            <article className="card">
                <a href={props.movies.trailer} className="card__link" rel="noreferrer" target="_blank"><img src={props.movies.image} alt="фрагмент из фильма" className="card__image"></img></a>
                <div className="card__box">
                    <h2 className="card__name">{props.movies.nameRU}</h2>
                    <button className="card__plus" onClick={onCardremove}></button>
                </div>
                <p className="card__time">{hour}ч{minutes}м</p>
            </article>
        );
    }
    return (
        <article className="card">
            <a href={props.movies.trailerLink} className="card__link" rel="noreferrer" target="_blank"><img src={image} alt="фрагмент из фильма" className="card__image"></img></a>
            <div className="card__box">
                <h2 className="card__name">{props.movies.nameRU}</h2>
                <button onClick={onCardLike} className={isLiked ? "card__like card__like_active" : "card__like"}></button>
            </div>
            <p className="card__time">{hour}ч{minutes}м</p>
        </article>
    );
}

export default MoviesCard;