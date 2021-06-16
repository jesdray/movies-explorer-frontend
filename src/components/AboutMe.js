import React from "react";

function AboutMe(props) {


    return (
        <div className="me">
            <div className="me__title-box">
                <h2 className="me__title">Студент</h2>
            </div>
            <div className="me__box">
                <div className="me__information">
                    <h3 className="me__name">Евгений</h3>
                    <p className="me__profession">Фронтенд-разработчик, 19 лет</p>
                    <p className="me__about">Я родился в Назарово, живу в Красноярске.
                        Образование среднее общее.
                        Люблю фильмы ужасов, музыку и видео игры.
                    </p>
                    <menu className="me__links">
                        <a href="#">Facebook</a>
                        <a href="#">Github</a>
                    </menu>
                </div>
                <div className="me__avatar"></div>
            </div>
        </div>
    );
}

export default AboutMe;