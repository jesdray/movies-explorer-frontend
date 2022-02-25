import React from "react";

function AboutMe(props) {


    return (
        <div className="me">
            <div className="me__title-box">
                <h2 className="me__title">Студент</h2>
            </div>
            <div className="me__box">
                <div className="me__information">
                    <div className="me__text-box">
                        <h3 className="me__name">Евгений</h3>
                        <p className="me__profession">Веб-разработчик, 19 лет</p>
                        <p className="me__about">
                            Я родился в Назарово, живу в Красноярске.
                            Образование среднее общее.
                            Люблю фильмы ужасов, музыку и видео игры.
                            Кодить начал недавно.
                        </p>
                    </div>
                    <menu className="me__social-links">
                        <a href="https://www.facebook.com/profile.php?id=100069625963737" className="me__social-link">Facebook</a>
                        <a href="https://github.com/jesdray" className="me__social-link">Github</a>
                    </menu>
                </div>
                <div className="me__avatar"></div>
            </div>
        </div>
    );
}

export default AboutMe;