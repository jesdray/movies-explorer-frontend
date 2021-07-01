import React from "react";

function MoviesCard(props) {
    const href = "https://api.nomoreparties.co";
    const hour = Math.floor(props.movies.duration / 60);
    const minutes = props.movies.duration - (hour * 60);
    const image = href + (props.savedMovies ? props.movies : props.movies.image.url);
    const thumbnail = href + props.thumbnailUrl;
    
    const like = !props.savedMovies && props.saveMovies.some((movie) => movie.movieId === props.movies.movieId);

    const [isLiked, setIsLiked] = React.useState(like);

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
        props.removeMovies(props.movies.movieId);
    }

    if (props.savedMovies) {
        return (
            <article className="card">
                <a href={props.movies.trailer} className="card__link" rel="noreferrer" target="_blank"><img src={props.movies.image} alt="фрагмент из фильма" className="card__image"></img></a>
                <div className="card__box">
                    <h2 className="card__name">{props.movies.nameRU}</h2>
                    <button type="button" className="card__plus" onClick={onCardremove}></button>
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